import test from "node:test";
import assert from "node:assert/strict";
import { buildBookingMail, escapeHtml, validateBookingPayload } from "./booking-core.mjs";

const now = 2_000_000;
const validPayload = {
  name: "Александр",
  phone: "+7 (925) 505-45-06",
  car: "BMW",
  model: "X5 G05 / 2021",
  message: "Нужна диагностика",
  consent: true,
  website: "",
  startedAt: now - 5000,
};

test("validates and normalizes a legitimate booking", () => {
  const result = validateBookingPayload(validPayload, now);
  assert.equal(result.ok, true);
  assert.equal(result.bot, false);
  assert.equal(result.data.phone, "+79255054506");
});

test("rejects invalid phone and missing consent", () => {
  const result = validateBookingPayload({ ...validPayload, phone: "123", consent: false }, now);
  assert.equal(result.ok, false);
  assert.equal(result.errors.length, 2);
});

test("silently accepts honeypot submissions without producing mail data", () => {
  const result = validateBookingPayload({ ...validPayload, website: "spam.example" }, now);
  assert.deepEqual(result, { ok: true, bot: true });
});

test("escapes visitor-controlled HTML in generated mail", () => {
  const result = validateBookingPayload({ ...validPayload, message: "<script>alert('x')</script>" }, now);
  const mail = buildBookingMail(result.data, new Date("2026-08-19T08:00:00Z"));
  assert.equal(mail.html.includes("<script>"), false);
  assert.equal(mail.html.includes("&lt;script&gt;"), true);
  assert.equal(escapeHtml('a&<b>"'), "a&amp;&lt;b&gt;&quot;");
});
