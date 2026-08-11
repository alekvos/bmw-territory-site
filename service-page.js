const serviceCatalog = {
  diagnostics: {
    number: '01',
    title: ['КОМПЬЮТЕРНАЯ', 'ДИАГНОСТИКА'],
    shortTitle: 'Компьютерная диагностика',
    code: 'FAULT / SCAN',
    image: '../assets/service-photos/product-03.jpg',
    lead: 'Находим не ошибку в памяти блока, а причину, из-за которой она появилась.',
    statement: 'Диагностика заканчивается не списком кодов, а понятным решением.',
    overview: 'Соединяем данные ISTA, измерения и опыт по поколениям BMW. Проверяем связанные системы, подтверждаем гипотезу и только после этого предлагаем ремонт.',
    signs: [
      ['CHECK ENGINE', 'На панели появился индикатор или сообщение Check Control.'],
      ['НЕСТАБИЛЬНОСТЬ', 'Автомобиль потерял динамику, работает неровно или вырос расход.'],
      ['ПЛАВАЮЩАЯ ОШИБКА', 'Неисправность возникает периодически и пропадает после перезапуска.'],
      ['ПЕРЕД ПОКУПКОЙ', 'Нужна техническая картина автомобиля до принятия решения.'],
    ],
    protocol: [
      ['СИМПТОМЫ', 'Фиксируем жалобу, условия появления и историю обслуживания.'],
      ['СКАНИРОВАНИЕ', 'Считываем память блоков, параметры и взаимосвязи систем.'],
      ['ПРОВЕРКА', 'Подтверждаем причину измерением, тест-планом или контрольным воздействием.'],
      ['РЕШЕНИЕ', 'Отдаём приоритетный план работ и согласовываем следующий шаг.'],
    ],
    result: ['Подтверждённая причина неисправности', 'Понятный приоритет работ', 'Согласованный объём без случайных замен'],
    faq: [
      ['Можно ли просто удалить ошибку?', 'Удаление записи не устраняет источник неисправности. Сначала мы проверяем причину и только затем очищаем память для контрольного теста.'],
      ['Сколько занимает диагностика?', 'Зависит от симптома и того, проявляется ли он постоянно. Точный формат мастер определит после первичного разговора.'],
      ['Вы диагностируете BMW всех поколений?', 'Работаем с разными поколениями BMW и подбираем метод проверки под архитектуру конкретного автомобиля.'],
    ],
    related: ['electronics', 'engine', 'transmission'],
  },
  engine: {
    number: '02',
    title: ['ДВИГАТЕЛЬ', 'И АГРЕГАТЫ'],
    shortTitle: 'Двигатель и агрегаты',
    code: 'ENGINE / SYSTEM',
    image: '../assets/service-photos/review-08.jpg',
    lead: 'От локальной течи до сложного ремонта — с дефектовкой и понятным объёмом работ.',
    statement: 'Разбираем только то, что действительно требует вмешательства.',
    overview: 'Начинаем с внешних проверок и измерений, оцениваем состояние связанных узлов и согласовываем границы ремонта до разборки. После дефектовки показываем, что найдено и почему это нужно исправить.',
    signs: [
      ['РАСХОД МАСЛА', 'Уровень заметно снижается между обслуживаниями или появился дым.'],
      ['ПЕРЕГРЕВ', 'Температура нестабильна, уходит антифриз или часто включается вентилятор.'],
      ['ШУМ / ВИБРАЦИЯ', 'Появились посторонние звуки, вибрация или неровная работа.'],
      ['ПОТЕРЯ ТЯГИ', 'Двигатель реагирует медленнее, чем обычно, или переходит в аварийный режим.'],
    ],
    protocol: [
      ['ОСМОТР', 'Проверяем течи, жидкости, навесное оборудование и историю симптома.'],
      ['ИЗМЕРЕНИЯ', 'Оцениваем давление, герметичность, параметры работы и состояние цилиндров.'],
      ['ДЕФЕКТОВКА', 'Определяем фактический износ и составляем точную ведомость.'],
      ['КОНТРОЛЬ', 'Собираем, адаптируем и проверяем агрегат под нагрузкой.'],
    ],
    result: ['Обоснованный объём ремонта', 'Фотофиксация ключевых этапов', 'Контроль параметров после сборки'],
    faq: [
      ['Всегда ли нужна разборка двигателя?', 'Нет. Во многих случаях причину можно локализовать внешними проверками, измерениями и эндоскопией.'],
      ['Можно приехать со своими запчастями?', 'Такой вариант можно обсудить с мастером заранее. Важно проверить совместимость и условия гарантии на работу.'],
      ['Сначала называете стоимость?', 'До диагностики называем понятный порядок оценки. Финальный объём согласовываем после подтверждения причины или дефектовки.'],
    ],
    related: ['diagnostics', 'electronics', 'transmission'],
  },
  chassis: {
    number: '03',
    title: ['ХОДОВАЯ', 'И ТОРМОЗА'],
    shortTitle: 'Ходовая и тормоза',
    code: 'CHASSIS / GEO',
    image: '../assets/service-photos/product-02.jpg',
    lead: 'Возвращаем автомобилю точность реакций, тишину и прогнозируемое торможение.',
    statement: 'Хорошая ходовая не напоминает о себе — она просто точно работает.',
    overview: 'Проверяем подвеску как систему: люфты, геометрию, амортизацию, колёса и тормозные механизмы. Не меняем детали по одному симптому, пока не увидим общую картину.',
    signs: [
      ['СТУКИ', 'Слышны удары или скрипы на неровностях и при манёврах.'],
      ['УВОД С КУРСА', 'Автомобиль тянет в сторону или требует постоянных подруливаний.'],
      ['ВИБРАЦИЯ', 'Руль или кузов вибрирует на скорости и при торможении.'],
      ['НЕРАВНЫЙ ИЗНОС', 'Шины стираются неодинаково или быстро теряют форму.'],
    ],
    protocol: [
      ['ТЕСТ-ДРАЙВ', 'Повторяем симптом и оцениваем поведение автомобиля в движении.'],
      ['ПОДЪЁМНИК', 'Проверяем люфты, крепления, амортизаторы и тормозные механизмы.'],
      ['ГЕОМЕТРИЯ', 'Сопоставляем состояние деталей с параметрами установки колёс.'],
      ['КОНТРОЛЬ', 'Проверяем момент затяжки, торможение и поведение после ремонта.'],
    ],
    result: ['Локализованный источник шума или увода', 'Приоритетный список деталей', 'Контрольная проверка после ремонта'],
    faq: [
      ['Сход-развал делают сразу?', 'Сначала убеждаемся, что в подвеске нет люфтов и деформаций, иначе регулировка не даст стабильного результата.'],
      ['Менять тормозные диски вместе с колодками?', 'Решение принимаем по фактической толщине, биению и состоянию рабочей поверхности.'],
      ['Можно проверить машину перед дальней поездкой?', 'Да, проведём комплексный осмотр ходовой, тормозов, шин и рабочих жидкостей.'],
    ],
    related: ['diagnostics', 'engine', 'transmission'],
  },
  electronics: {
    number: '04',
    title: ['ЭЛЕКТРИКА', 'И ЭЛЕКТРОНИКА'],
    shortTitle: 'Электрика и электроника',
    code: 'ECU / NETWORK',
    image: '../assets/service-photos/source-07.jpg',
    lead: 'Ищем неисправность по цепочке: от питания и проводки до логики электронных блоков.',
    statement: 'В сложной электронике важен не код ошибки, а связь между системами.',
    overview: 'Анализируем топологию автомобиля, питание, обмен данными и программное состояние модулей. Восстанавливаем работу системы без ненужной замены дорогих блоков.',
    signs: [
      ['РАЗРЯД АКБ', 'Автомобиль теряет заряд после стоянки или сообщает об энергопотреблении.'],
      ['СБОИ СИСТЕМ', 'Функции отключаются, появляются множественные ошибки или пропадает связь.'],
      ['СВЕТ / КОМФОРТ', 'Некорректно работают освещение, стеклоподъёмники, климат или доступ.'],
      ['МУЛЬТИМЕДИА', 'Перезагружается iDrive, нет звука, изображения или подключения.'],
    ],
    protocol: [
      ['ПИТАНИЕ', 'Проверяем аккумулятор, генератор, массы и ток покоя.'],
      ['СЕТЬ', 'Анализируем обмен данными и доступность электронных блоков.'],
      ['ЦЕПЬ', 'Проверяем проводку, разъёмы, сигналы и исполнительные элементы.'],
      ['ВОССТАНОВЛЕНИЕ', 'Ремонтируем, программируем и проводим полный функциональный тест.'],
    ],
    result: ['Проверенная электрическая цепь', 'Сохранение исправных блоков', 'Функциональный тест всех связанных систем'],
    faq: [
      ['Можно найти утечку тока за один визит?', 'Часто да, но плавающие потребители могут потребовать длительного измерения в режиме сна автомобиля.'],
      ['Ремонтируете блоки или только меняете?', 'Сначала оцениваем возможность корректного восстановления. Решение зависит от типа повреждения и безопасности ремонта.'],
      ['После замены блока нужно программирование?', 'Для многих модулей требуется кодирование, привязка или программирование под комплектацию автомобиля.'],
    ],
    related: ['diagnostics', 'coding', 'engine'],
  },
  transmission: {
    number: '05',
    title: ['ТРАНСМИССИЯ', 'И xDRIVE'],
    shortTitle: 'Трансмиссия и xDrive',
    code: 'ZF / xDRIVE',
    image: '../assets/service-photos/source-02.jpg',
    lead: 'Диагностируем коробку, раздаточную систему и приводы как единый силовой тракт.',
    statement: 'Толчок при переключении — симптом. Наша задача — найти его источник.',
    overview: 'Сопоставляем адаптации, состояние масла, механику и работу связанных блоков. Отделяем программную проблему от гидравлической или механической до начала ремонта.',
    signs: [
      ['ТОЛЧКИ', 'Переключения стали заметными, запаздывают или сопровождаются ударом.'],
      ['ВИБРАЦИЯ', 'Появилась дрожь при разгоне, на постоянной скорости или под нагрузкой.'],
      ['ШУМ', 'Слышен гул, вой или щелчки со стороны трансмиссии и приводов.'],
      ['ОШИБКА xDRIVE', 'Система полного привода отключается или работает непредсказуемо.'],
    ],
    protocol: [
      ['ДАННЫЕ', 'Считываем ошибки, адаптации, температуры и рабочие параметры.'],
      ['МЕХАНИКА', 'Проверяем опоры, приводы, редукторы и раздаточную коробку.'],
      ['ЖИДКОСТЬ', 'Оцениваем уровень, состояние масла и признаки внутреннего износа.'],
      ['ТЕСТ', 'Проводим адаптацию и контрольную поездку в разных режимах.'],
    ],
    result: ['Разделение программной и механической причины', 'План ремонта по приоритетам', 'Контроль адаптаций и поведения в движении'],
    faq: [
      ['Нужно ли менять масло в АКПП?', 'Интервал и способ обслуживания зависят от коробки, пробега, истории и текущего состояния масла. Сначала оцениваем эти факторы.'],
      ['Толчки всегда означают ремонт коробки?', 'Нет. Причиной могут быть адаптации, опоры, приводы, раздаточная коробка или работа двигателя.'],
      ['Диагностируете раздаточную коробку отдельно?', 'Да, проверяем электронную часть, механику, масло и влияние колёс на работу xDrive.'],
    ],
    related: ['diagnostics', 'chassis', 'engine'],
  },
  coding: {
    number: '06',
    title: ['КОДИРОВАНИЕ', 'И ДООСНАЩЕНИЕ'],
    shortTitle: 'Кодирование и дооснащение',
    code: 'CODING / ISTA',
    image: '../assets/service-photos/source-08.jpg',
    lead: 'Активируем штатные возможности и интегрируем оборудование в архитектуру автомобиля.',
    statement: 'Дооснащение должно ощущаться заводским — и работать так же стабильно.',
    overview: 'Проверяем совместимость блоков и комплектации, сохраняем исходную конфигурацию, выполняем установку и кодирование. После работы тестируем не одну функцию, а все связанные системы.',
    signs: [
      ['НОВАЯ ФУНКЦИЯ', 'Нужно активировать доступную штатную возможность автомобиля.'],
      ['ДООСНАЩЕНИЕ', 'Планируется установка камеры, света, мультимедиа или компонентов комфорта.'],
      ['ЗАМЕНА БЛОКА', 'После ремонта или замены модуль требует привязки к автомобилю.'],
      ['СБОЙ ПОСЛЕ ПО', 'Функция пропала после обновления, разряда АКБ или сторонней работы.'],
    ],
    protocol: [
      ['СОВМЕСТИМОСТЬ', 'Проверяем комплектацию, версии блоков и необходимые компоненты.'],
      ['РЕЗЕРВ', 'Сохраняем исходное состояние и готовим безопасный сценарий изменения.'],
      ['ИНТЕГРАЦИЯ', 'Устанавливаем, программируем и кодируем оборудование.'],
      ['ПРОВЕРКА', 'Тестируем функцию и все связанные системы в реальных режимах.'],
    ],
    result: ['Проверенная совместимость до установки', 'Сохранённая исходная конфигурация', 'Полный функциональный тест'],
    faq: [
      ['Кодирование влияет на гарантию автомобиля?', 'Зависит от возраста автомобиля, типа изменения и условий конкретной гарантии. До работы объясним возможные ограничения.'],
      ['Можно вернуть исходные настройки?', 'Для обратимых изменений мы сохраняем исходную конфигурацию и заранее обсуждаем сценарий возврата.'],
      ['Устанавливаете неоригинальное оборудование?', 'Рассматриваем только решения, которые можно безопасно интегрировать в электронику конкретного автомобиля.'],
    ],
    related: ['electronics', 'diagnostics', 'chassis'],
  },
};

const serviceKey = document.body.dataset.service;
const service = serviceCatalog[serviceKey] || serviceCatalog.diagnostics;
const app = document.querySelector('#serviceApp');
const serviceUrl = `../index.html?service=${encodeURIComponent(service.shortTitle)}#booking`;

const arrowSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 7l5 5-5 5" /></svg>';

const renderRelated = (key) => {
  const item = serviceCatalog[key];
  return `<a class="related-card page-link reveal-card" href="./${key}.html">
    <span class="related-card__number">${item.number}</span>
    <img src="${item.image}" alt="${item.shortTitle}" loading="lazy" />
    <div><small>${item.code}</small><strong>${item.shortTitle}</strong></div>
    <span class="related-card__arrow">${arrowSvg}</span>
  </a>`;
};

app.innerHTML = `
  <div class="page-loader service-loader" aria-hidden="true">
    <div class="page-loader__rail"><span></span></div>
    <div class="page-loader__mark"><span>${service.number}</span><small>BMW TERRITORY</small></div>
  </div>
  <div class="service-transition" aria-hidden="true"><span>BMW TERRITORY</span><strong>${service.shortTitle}</strong></div>
  <div class="grain" aria-hidden="true"></div>
  <div class="cursor-glow" aria-hidden="true"></div>
  <div class="cursor-ring" aria-hidden="true"><span></span></div>

  <header class="site-header service-header">
    <a class="brand page-link" href="../index.html#home" aria-label="BMW Территория — на главную">
      <span class="brand__roundel"><b>BT</b></span>
      <span class="brand__text"><strong>BMW ТЕРРИТОРИЯ</strong><small>ПРОФИЛЬНЫЙ СЕРВИС · 1997</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Основная навигация">
      <a class="page-link active" href="../index.html#services">УСЛУГИ</a>
      <a class="page-link" href="../index.html#approach">ПОДХОД</a>
      <a class="page-link" href="../index.html#about">О НАС</a>
      <a class="page-link" href="../index.html#contacts">КОНТАКТЫ</a>
    </nav>
    <div class="header-actions">
      <a class="header-phone" href="tel:+79255054506"><small>ПН–ПТ, 10:00–20:00</small><span>+7 (925) 505-45-06</span></a>
      <a class="button button--compact page-link" href="${serviceUrl}"><span>ЗАПИСАТЬСЯ</span>${arrowSvg}</a>
    </div>
    <button class="menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false"><span></span><span></span></button>
  </header>

  <div class="mobile-menu" aria-hidden="true">
    <nav>
      <a class="page-link" href="../index.html#services"><span>01</span> УСЛУГИ</a>
      <a class="page-link" href="../index.html#approach"><span>02</span> ПОДХОД</a>
      <a class="page-link" href="../index.html#about"><span>03</span> О НАС</a>
      <a class="page-link" href="../index.html#contacts"><span>04</span> КОНТАКТЫ</a>
    </nav>
    <a class="button page-link" href="${serviceUrl}">ЗАПИСАТЬСЯ</a>
  </div>

  <main>
    <section class="service-detail-hero">
      <div class="service-detail-hero__grid" aria-hidden="true"></div>
      <div class="service-detail-hero__copy">
        <a class="service-back page-link" href="../index.html#services">${arrowSvg}<span>ВСЕ КОМПЕТЕНЦИИ</span></a>
        <div class="service-eyebrow"><span>${service.number} / 06</span><i></i><em>${service.code}</em></div>
        <h1><span>${service.title[0]}</span><strong>${service.title[1]}</strong></h1>
        <p>${service.lead}</p>
        <div class="service-detail-hero__actions">
          <a class="button button--primary page-link" href="${serviceUrl}"><span>ОБСУДИТЬ ЗАДАЧУ</span>${arrowSvg}</a>
          <a class="service-phone" href="tel:+79255054506"><small>КОНСУЛЬТАЦИЯ МАСТЕРА</small><strong>+7 (925) 505-45-06</strong></a>
        </div>
        <div class="service-assurance"><span>СОГЛАСОВАНИЕ ДО РАБОТ</span><span>ПРОФИЛЬНАЯ КОМАНДА</span><span>С 1997 ГОДА</span></div>
      </div>
      <div class="service-detail-hero__visual">
        <img src="${service.image}" alt="${service.shortTitle} BMW" />
        <div class="service-detail-hero__visual-top"><span>BMW CARE SYSTEM</span><b>${service.number}</b></div>
        <div class="service-detail-hero__visual-bottom"><span>WORKSHOP ARCHIVE</span><b>${service.code}</b></div>
        <div class="service-scanline" aria-hidden="true"></div>
      </div>
      <div class="service-detail-hero__rail"><span>${service.number}</span><i></i><em>КРУТИТЕ ВНИЗ</em></div>
    </section>

    <section class="service-overview detail-section">
      <div class="detail-kicker reveal"><span>01</span><i></i><em>ИНЖЕНЕРНЫЙ ПОДХОД</em></div>
      <div class="service-overview__statement reveal"><span>“</span><h2>${service.statement}</h2></div>
      <div class="service-overview__copy reveal">
        <p>${service.overview}</p>
        <div class="service-overview__rule"><span>ПРИНЦИП</span><strong>СНАЧАЛА ПРИЧИНА<br />ЗАТЕМ РЕШЕНИЕ</strong></div>
      </div>
    </section>

    <section class="service-signs detail-section">
      <div class="detail-heading">
        <div class="detail-kicker reveal"><span>02</span><i></i><em>КОГДА ОБРАЩАТЬСЯ</em></div>
        <div><h2 class="reveal">СИГНАЛЫ, КОТОРЫЕ<br /><span>НЕ СТОИТ ИГНОРИРОВАТЬ</span></h2><p class="reveal">Не обязательно ждать явной поломки. Ранний симптом часто позволяет ограничиться точной локальной работой.</p></div>
      </div>
      <div class="service-signs__grid">
        ${service.signs.map((item, index) => `<article class="service-sign reveal-card"><span>0${index + 1}</span><i></i><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}
      </div>
    </section>

    <section class="service-protocol">
      <div class="service-protocol__intro">
        <div class="detail-kicker detail-kicker--light reveal"><span>03</span><i></i><em>ПРОТОКОЛ РАБОТЫ</em></div>
        <h2 class="reveal">ЧЕТЫРЕ ЭТАПА.<br /><span>НИ ОДНОГО СЛУЧАЙНОГО.</span></h2>
      </div>
      <div class="service-protocol__steps">
        ${service.protocol.map((item, index) => `<article class="protocol-step reveal-card"><div><span>0${index + 1}</span><small>${index === 3 ? 'RESULT' : 'PROCESS'}</small></div><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}
      </div>
    </section>

    <section class="service-result detail-section">
      <div class="service-result__meta reveal"><span>04 / РЕЗУЛЬТАТ</span><strong>${service.code}</strong></div>
      <div class="service-result__title reveal"><h2>ЧТО ВЫ ПОЛУЧАЕТЕ<br /><span>ПОСЛЕ РАБОТЫ</span></h2><p>Не «попробовали и посмотрим», а зафиксированный результат и понятный следующий шаг.</p></div>
      <div class="service-result__list">
        ${service.result.map((item, index) => `<div class="result-line reveal"><span>0${index + 1}</span><strong>${item}</strong><i>${arrowSvg}</i></div>`).join('')}
      </div>
      <div class="service-result__facts reveal">
        <div><strong>1997</strong><span>РАБОТАЕМ<br />С BMW</span></div>
        <div><strong>BMW</strong><span>ПРОФИЛЬНАЯ<br />КОМПЕТЕНЦИЯ</span></div>
        <div><strong>100%</strong><span>СОГЛАСОВАНИЕ<br />ДО РАБОТ</span></div>
      </div>
    </section>

    <section class="service-faq detail-section">
      <div class="detail-kicker reveal"><span>05</span><i></i><em>БЕЗ МЕЛКОГО ШРИФТА</em></div>
      <div class="service-faq__layout">
        <div><h2 class="reveal">ЧАСТЫЕ<br /><span>ВОПРОСЫ</span></h2><p class="reveal">Если вашего вопроса нет в списке — мастер ответит по телефону до записи.</p></div>
        <div class="service-faq__items">
          ${service.faq.map((item, index) => `<details class="faq-item reveal-card"><summary><span>0${index + 1}</span><strong>${item[0]}</strong><i></i></summary><p>${item[1]}</p></details>`).join('')}
        </div>
      </div>
    </section>

    <section class="service-related detail-section">
      <div class="detail-heading detail-heading--compact">
        <div class="detail-kicker reveal"><span>06</span><i></i><em>СВЯЗАННЫЕ РАБОТЫ</em></div>
        <h2 class="reveal">ДРУГИЕ <span>КОМПЕТЕНЦИИ</span></h2>
      </div>
      <div class="related-grid">${service.related.map(renderRelated).join('')}</div>
    </section>

    <section class="service-cta">
      <div class="service-cta__line" aria-hidden="true"></div>
      <span class="service-cta__eyebrow">${service.number} / ${service.code}</span>
      <h2>ОБСУДИМ ВАШ<br /><span>BMW?</span></h2>
      <p>Опишите симптом — мастер уточнит детали и предложит правильный формат первого визита.</p>
      <div><a class="button button--primary page-link" href="${serviceUrl}"><span>ЗАПИСАТЬСЯ В СЕРВИС</span>${arrowSvg}</a><a href="tel:+79255054506">+7 (925) 505-45-06</a></div>
    </section>
  </main>

  <footer class="service-footer">
    <a class="brand page-link" href="../index.html#home"><span class="brand__roundel"><b>BT</b></span><span class="brand__text"><strong>BMW ТЕРРИТОРИЯ</strong><small>ПРОФИЛЬНЫЙ СЕРВИС · 1997</small></span></a>
    <p>Москва, ул. Ермакова Роща, 7А, стр. 1<br />Пн–Пт, 10:00–20:00</p>
    <p>Независимый профильный сервис.<br />Не является официальным дилером BMW AG.</p>
    <span>© 2026</span>
  </footer>
`;

const body = document.body;
const header = document.querySelector('.site-header');
const cursorGlow = document.querySelector('.cursor-glow');
const cursorRing = document.querySelector('.cursor-ring');
const transition = document.querySelector('.service-transition');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

const setMenu = (open) => {
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  body.classList.toggle('is-locked', open);
};

window.addEventListener('load', () => window.setTimeout(() => body.classList.add('is-loaded'), 100));
window.setTimeout(() => body.classList.add('is-loaded'), 900);
menuToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('is-open')));

document.querySelectorAll('.page-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setMenu(false);
    transition.querySelector('strong').textContent = link.querySelector('strong')?.textContent || 'BMW TERRITORY';
    transition.classList.add('is-active');
    window.setTimeout(() => { window.location.href = link.href; }, 340);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

document.querySelectorAll('.reveal, .reveal-card').forEach((element, index) => {
  if (element.classList.contains('reveal-card')) element.style.transitionDelay = `${Math.min((index % 4) * 55, 165)}ms`;
  observer.observe(element);
});

let scrollFrame = 0;
const updateScroll = () => {
  const y = window.scrollY;
  const range = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  header.classList.toggle('is-scrolled', y > 24);
  document.documentElement.style.setProperty('--scroll-progress', Math.min((y / range) * 100, 100).toFixed(2));
  const visual = document.querySelector('.service-detail-hero__visual img');
  if (visual && y < window.innerHeight * 1.2) visual.style.transform = `scale(1.055) translate3d(0, ${Math.min(y * .035, 24)}px, 0)`;
};

window.addEventListener('scroll', () => {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => { updateScroll(); scrollFrame = 0; });
}, { passive: true });
updateScroll();

if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let pointerX = -100;
  let pointerY = -100;
  let ringX = -100;
  let ringY = -100;
  const renderCursor = () => {
    ringX += (pointerX - ringX) * .16;
    ringY += (pointerY - ringY) * .16;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderCursor);
  };
  renderCursor();
  window.addEventListener('pointermove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  });
  document.querySelectorAll('a, button, summary').forEach((element) => {
    element.addEventListener('pointerenter', () => body.classList.add('cursor-active'));
    element.addEventListener('pointerleave', () => body.classList.remove('cursor-active'));
  });
}
