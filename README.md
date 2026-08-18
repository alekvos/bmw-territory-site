# BMW Территория — прототип сайта

Премиальный одностраничный сайт профильного сервиса BMW с дополнительным направлением Mercedes-Benz.

## Публикация

- Основной домен: https://bmw-territory.ru
- Технический адрес Timeweb: https://alekvos-bmw-territory-site-3f80.twc1.net
- GitHub Pages: https://alekvos.github.io/bmw-territory-site/
- Репозиторий: https://github.com/alekvos/bmw-territory-site

Timeweb привязан к ветке `main`: после каждого пуша запускается автоматический деплой.

## Локальный запуск

Проект не требует сборки. Запустите локальный сервер:

```powershell
python -m http.server 4173
```

Затем откройте http://localhost:4173.

Для подготовки статического каталога `dist/` также доступна команда:

```powershell
npm run build
```

## Что внутри

- адаптивная вёрстка для desktop, tablet и mobile;
- премиальная BMW-палитра и типографика Unbounded, Playfair Display Italic, Golos Text и JetBrains Mono;
- анимированный hero, параллакс, reveal-эффекты, магнитные кнопки и короткие переходы между разделами;
- фотоматериалы услуг, форма записи и интерактивная карта;
- реальные контакты и точка сервиса на Яндекс Картах.
