const allowedCars = new Set(["BMW", "Mercedes-Benz"]);

const singleLine = (value, maxLength) => String(value ?? "")
  .normalize("NFKC")
  .replace(/[\u0000-\u001f\u007f]+/g, " ")
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, maxLength);

const multiline = (value, maxLength) => String(value ?? "")
  .normalize("NFKC")
  .replace(/\r\n?/g, "\n")
  .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
  .trim()
  .slice(0, maxLength);

export const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

export function validateBookingPayload(payload, now = Date.now()) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { ok: false, errors: ["Некорректный формат заявки."] };
  }

  const website = singleLine(payload.website, 200);
  const startedAt = Number(payload.startedAt);
  const elapsed = Number.isFinite(startedAt) ? now - startedAt : NaN;

  // A filled honeypot or an impossibly fast submission is treated as a bot.
  // The API returns a neutral success response without sending any email.
  if (website || (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < 1200)) {
    return { ok: true, bot: true };
  }

  const name = singleLine(payload.name, 80);
  const rawPhone = singleLine(payload.phone, 40);
  let phoneDigits = rawPhone.replace(/\D/g, "");
  if (phoneDigits.startsWith("8")) phoneDigits = `7${phoneDigits.slice(1)}`;
  const car = singleLine(payload.car, 30);
  const model = singleLine(payload.model, 100);
  const message = multiline(payload.message, 1200);
  const consent = payload.consent === true || payload.consent === "true";
  const errors = [];

  if (name.length < 2) errors.push("Укажите имя.");
  if (phoneDigits.length !== 11 || !phoneDigits.startsWith("7")) errors.push("Укажите корректный номер телефона.");
  if (!allowedCars.has(car)) errors.push("Выберите автомобиль из списка.");
  if (!consent) errors.push("Подтвердите согласие на обработку данных.");
  if (String(payload.model ?? "").length > 100) errors.push("Слишком длинное поле модели.");
  if (String(payload.message ?? "").length > 1200) errors.push("Сократите описание задачи.");

  if (errors.length) return { ok: false, errors };

  return {
    ok: true,
    bot: false,
    data: {
      name,
      phone: `+${phoneDigits}`,
      car,
      model,
      message,
    },
  };
}

export function buildBookingMail(data, submittedAt = new Date()) {
  const subjectVehicle = [data.car, data.model].filter(Boolean).join(" ");
  const subject = `Новая заявка с сайта: ${subjectVehicle || data.car}`;
  const rows = [
    ["Имя", data.name],
    ["Телефон", data.phone],
    ["Автомобиль", data.car],
    ["Модель / год", data.model || "Не указаны"],
    ["Задача", data.message || "Не указана"],
    ["Получена", submittedAt.toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows.map(([label, value]) => `
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #dce5eb;color:#61717c;font:12px Arial,sans-serif;vertical-align:top">${escapeHtml(label)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #dce5eb;color:#0b1720;font:15px Arial,sans-serif;white-space:pre-wrap">${escapeHtml(value)}</td>
    </tr>`).join("");

  const html = `<!doctype html>
  <html lang="ru"><body style="margin:0;padding:24px;background:#edf4f8">
    <table role="presentation" style="width:100%;max-width:680px;margin:auto;border-collapse:collapse;background:#fff;border:1px solid #d7e1e7">
      <tr><td colspan="2" style="padding:24px 28px;background:#0b2234;color:#fff;font:700 22px Arial,sans-serif">BMW ТЕРРИТОРИЯ</td></tr>
      <tr><td colspan="2" style="padding:18px 28px 8px;color:#1687d9;font:700 13px Arial,sans-serif;letter-spacing:.08em">НОВАЯ ЗАЯВКА С САЙТА</td></tr>
      ${htmlRows}
      <tr><td colspan="2" style="padding:18px 28px;color:#687985;font:12px/1.5 Arial,sans-serif">Письмо сформировано автоматически на bmw-territory.ru. Свяжитесь с клиентом по указанному телефону.</td></tr>
    </table>
  </body></html>`;

  return { subject, text, html };
}
