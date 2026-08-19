import { createServer } from "node:http";
import nodemailer from "nodemailer";
import { buildBookingMail, validateBookingPayload } from "./booking-core.mjs";

const port = Number(process.env.PORT || 8787);
const smtpHost = process.env.SMTP_HOST || "smtp.yandex.ru";
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = String(process.env.SMTP_SECURE || "true").toLowerCase() !== "false";
const smtpUser = String(process.env.SMTP_USER || "").trim();
const smtpLogin = String(process.env.SMTP_LOGIN || smtpUser.split("@")[0] || "").trim();
const smtpPass = String(process.env.SMTP_PASS || "").trim();
const bookingTo = String(process.env.BOOKING_TO || "").trim();
const fromName = String(process.env.BOOKING_FROM_NAME || "BMW Territory Site").trim();
const defaultOrigins = process.env.NODE_ENV === "production"
  ? "https://bmw-territory.ru,https://www.bmw-territory.ru"
  : "https://bmw-territory.ru,https://www.bmw-territory.ru,http://127.0.0.1:4173,http://localhost:4173";
const allowedOrigins = new Set(
  String(process.env.ALLOWED_ORIGINS || defaultOrigins)
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);
const configured = Boolean(smtpUser && smtpLogin && smtpPass && bookingTo);
const transporter = configured
  ? nodemailer.createTransport({
      pool: true,
      maxConnections: 2,
      maxMessages: 50,
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpLogin, pass: smtpPass },
      tls: { minVersion: "TLSv1.2", servername: smtpHost },
    })
  : null;

const requestLimits = new Map();
const windowMs = 10 * 60 * 1000;
const maxRequests = 5;
setInterval(() => {
  const now = Date.now();
  for (const [ip, limit] of requestLimits) {
    if (limit.resetAt <= now) requestLimits.delete(ip);
  }
}, windowMs).unref();

function json(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
  });
  response.end(JSON.stringify(payload));
}

function getClientIp(request) {
  return String(request.headers["x-real-ip"] || request.socket.remoteAddress || "unknown").slice(0, 80);
}

function isRateLimited(ip, now = Date.now()) {
  const current = requestLimits.get(ip);
  if (!current || current.resetAt <= now) {
    requestLimits.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  current.count += 1;
  return current.count > maxRequests;
}

function readJson(request, limit = 16 * 1024) {
  return new Promise((resolve, reject) => {
    let body = "";
    let received = 0;
    let settled = false;
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      if (settled) return;
      received += Buffer.byteLength(chunk);
      if (received > limit) {
        settled = true;
        reject(Object.assign(new Error("Payload too large"), { status: 413 }));
        return;
      }
      body += chunk;
    });
    request.on("end", () => {
      if (settled) return;
      try {
        settled = true;
        resolve(JSON.parse(body));
      } catch {
        settled = true;
        reject(Object.assign(new Error("Invalid JSON"), { status: 400 }));
      }
    });
    request.on("error", (error) => {
      if (settled) return;
      settled = true;
      reject(error);
    });
  });
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", "http://localhost");

  if (request.method === "GET" && url.pathname === "/health") {
    json(response, configured ? 200 : 503, { service: "booking", ready: configured });
    return;
  }

  if (request.method !== "POST" || url.pathname !== "/api/booking") {
    json(response, 404, { ok: false, code: "NOT_FOUND" });
    return;
  }

  const origin = String(request.headers.origin || "");
  const fetchSite = String(request.headers["sec-fetch-site"] || "");
  if (!origin || !allowedOrigins.has(origin) || (fetchSite && fetchSite !== "same-origin")) {
    json(response, 403, { ok: false, code: "ORIGIN_REJECTED" });
    return;
  }

  if (!String(request.headers["content-type"] || "").toLowerCase().startsWith("application/json")) {
    json(response, 415, { ok: false, code: "CONTENT_TYPE_REQUIRED" });
    return;
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    json(response, 429, { ok: false, code: "RATE_LIMITED" });
    return;
  }

  try {
    const payload = await readJson(request);
    const validation = validateBookingPayload(payload);
    if (!validation.ok) {
      json(response, 422, { ok: false, code: "VALIDATION_FAILED", errors: validation.errors });
      return;
    }

    if (validation.bot) {
      json(response, 201, { ok: true });
      return;
    }

    if (!transporter) {
      json(response, 503, { ok: false, code: "MAIL_NOT_CONFIGURED" });
      return;
    }

    const mail = buildBookingMail(validation.data);
    await transporter.sendMail({
      from: { name: fromName, address: smtpUser },
      to: bookingTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    json(response, 201, { ok: true });
  } catch (error) {
    const status = Number(error?.status) || 502;
    console.error("Booking request failed", {
      status,
      code: String(error?.code || "MAIL_SEND_FAILED").slice(0, 80),
      command: String(error?.command || "").slice(0, 80),
    });
    if (!response.headersSent) json(response, status, { ok: false, code: status === 502 ? "MAIL_SEND_FAILED" : "BAD_REQUEST" });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`BMW Territory booking service listening on 127.0.0.1:${port}; SMTP ready: ${configured}`);
});

function shutdown() {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 8000).unref();
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
