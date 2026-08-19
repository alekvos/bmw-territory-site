# Подключение формы к Яндекс Почте

Форма подготовлена к отправке через локальный Node.js-сервис. До появления SMTP-пароля интерфейс автоматически предлагает посетителю резервный переход в WhatsApp или звонок.

## Состав

- `server/booking-service.mjs` — HTTP API на `127.0.0.1:8787`;
- `server/booking-core.mjs` — валидация и безопасная сборка письма;
- `server/booking.env.example` — перечень переменных без реальных секретов;
- `ops/bmw-territory-booking.service` — unit-файл systemd;
- `ops/nginx-booking-location.conf` — location для рабочего домена.

## Первичная установка на сервер

1. Установить актуальную LTS-версию Node.js и npm из доверенного репозитория.
2. Создать каталоги `/opt/bmw-territory-booking/releases`, `/opt/bmw-territory-booking/current` и `/etc/bmw-territory`.
3. Загрузить содержимое `server/` в отдельный каталог релиза внутри `/opt/bmw-territory-booking/releases/`.
4. В каталоге релиза выполнить `npm ci --omit=dev`.
5. Создать `/etc/bmw-territory/booking.env` по образцу `server/booking.env.example`.
6. Установить владельца `root:root` и права `600` для файла `booking.env`. Не добавлять его в Git и не размещать внутри публичного каталога сайта.
7. Переключить `/opt/bmw-territory-booking/current` на новый релиз.
8. Скопировать unit-файл в `/etc/systemd/system/bmw-territory-booking.service`, выполнить `systemctl daemon-reload` и `systemctl enable --now bmw-territory-booking`.
9. Добавить блок из `nginx-booking-location.conf` внутрь HTTPS `server` для домена, проверить `nginx -t` и перезагрузить Nginx.

## Проверка

```sh
curl -sS http://127.0.0.1:8787/health
curl -sS -o /dev/null -w '%{http_code}\n' https://bmw-territory.ru/
```

До добавления действительных SMTP-переменных `/health` возвращает `503` и `{"service":"booking","ready":false}`. После настройки — `200` и `ready:true`.

Тестовую заявку следует отправлять только через настоящую форму на `https://bmw-territory.ru/`: API проверяет домен запроса. После теста проверить «Входящие» и «Спам», затем убедиться, что в `journalctl -u bmw-territory-booking` нет имени, телефона или текста заявки.

## Параметры Яндекса

- SMTP: `smtp.yandex.ru`;
- порт: `465`;
- шифрование: SSL/TLS;
- `SMTP_USER`: полный адрес технического ящика;
- `SMTP_LOGIN`: логин Яндекса (для обычного `login@yandex.ru` — часть до `@`);
- `SMTP_PASS`: отдельный пароль приложения «Почта»;
- `BOOKING_TO`: адрес Андрея, на который должны поступать заявки.

Адрес отправителя в письме должен совпадать с `SMTP_USER`, иначе Яндекс может отклонить сообщение.
