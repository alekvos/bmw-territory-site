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
    related: ['electronics', 'engine', 'maintenance'],
  },
  engine: {
    number: '02',
    title: ['ДВИГАТЕЛЬ', 'И АГРЕГАТЫ'],
    shortTitle: 'Двигатель и агрегаты',
    code: 'ENGINE / SYSTEM',
    image: '../assets/service-photos/review-08.jpg',
    lead: 'От замены цепи ГРМ до капитального ремонта двигателя — с точной дефектовкой.',
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
    related: ['diagnostics', 'maintenance', 'transmission'],
  },
  maintenance: {
    number: '03',
    title: ['ОБСЛУЖИВАНИЕ', 'АВТОМОБИЛЯ'],
    shortTitle: 'Обслуживание автомобиля',
    code: 'OEM / SERVICE',
    image: '../assets/service-photos/maintenance-workshop.webp',
    lead: 'Плановое обслуживание с оригинальными расходными материалами и заранее понятной сметой.',
    valueNote: 'ДЕЛАЕМ КАЧЕСТВЕННО — ПО ВМЕНЯЕМОЙ ЦЕНЕ',
    statement: 'Хорошее обслуживание сохраняет ресурс автомобиля и не создаёт лишних расходов.',
    overview: 'Подбираем регламент под двигатель, пробег и условия эксплуатации. Заранее согласовываем материалы и стоимость, используем подходящие оригинальные или проверенные расходники и фиксируем рекомендации на следующий визит.',
    signs: [
      ['ПЛАНОВОЕ ТО', 'Подошёл срок замены масла, фильтров и обязательных расходных материалов.'],
      ['ПЕРЕД СЕЗОНОМ', 'Нужно проверить жидкости, тормоза, аккумулятор и ходовую перед сменой условий.'],
      ['ПОСЛЕ ПОКУПКИ', 'История автомобиля неизвестна и требуется базовая точка отсчёта.'],
      ['ПЕРЕД ПОЕЗДКОЙ', 'Нужна спокойная комплексная проверка автомобиля перед дальней дорогой.'],
    ],
    protocol: [
      ['ИСТОРИЯ', 'Уточняем пробег, режим эксплуатации и выполненные ранее работы.'],
      ['ОСМОТР', 'Проверяем жидкости, фильтры, тормоза, ходовую и основные системы.'],
      ['ОБСЛУЖИВАНИЕ', 'Меняем согласованные материалы по технологическим требованиям BMW.'],
      ['РЕКОМЕНДАЦИИ', 'Фиксируем состояние автомобиля и планируем следующий визит без лишних работ.'],
    ],
    result: ['Понятная смета до начала работ', 'Подходящие расходные материалы', 'Зафиксированный план следующего обслуживания'],
    faq: [
      ['Можно выбрать расходные материалы?', 'Да. Предложим подходящие варианты, объясним разницу и заранее согласуем итоговую стоимость.'],
      ['Что входит в плановое ТО?', 'Состав зависит от модели, двигателя, пробега и истории. Перед записью мастер уточнит данные и предложит конкретный перечень.'],
      ['Проверяете автомобиль кроме замены масла?', 'Да, во время обслуживания осматриваем основные узлы и сообщаем о найденном до любых дополнительных работ.'],
    ],
    related: ['engine', 'chassis', 'transmission'],
  },
  chassis: {
    number: '04',
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
    related: ['maintenance', 'diagnostics', 'transmission'],
  },
  electronics: {
    number: '05',
    title: ['ЭЛЕКТРИКА', 'И ЭЛЕКТРОНИКА'],
    shortTitle: 'Электрика и электроника',
    code: 'ECU / NETWORK',
    image: '../assets/service-photos/electronics-workshop.webp',
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
    number: '06',
    title: ['ОБСЛУЖИВАНИЕ И РЕМОНТ', 'ТРАНСМИССИИ'],
    shortTitle: 'Обслуживание и ремонт трансмиссии',
    code: 'ATF / xDRIVE',
    image: '../assets/service-photos/transmission-workshop.webp',
    lead: 'Обслуживаем и диагностируем коробку, раздаточную систему и приводы как единый силовой тракт.',
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
    number: '07',
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
const serviceUrl = `../?service=${encodeURIComponent(service.shortTitle)}#booking`;

const arrowSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 7l5 5-5 5" /></svg>';
const messengerLinksMarkup = `
  <a class="messenger-link" href="https://max.ru/" target="_blank" rel="noreferrer" data-copy-phone="79255054506" aria-label="Написать в MAX" title="MAX — номер скопируется"><svg class="messenger-icon messenger-icon--max" viewBox="0 0 100 100" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M50.757 0.262c27.536 0 49.129 22.335 49.129 49.885 0 27.55-22.279 49.343-48.865 49.343-9.435 0-14.007-1.328-21.371-6.543a1.3 1.3 0 0 0-1.629.193c-5.664 6.043-20.171 10.286-20.835 2.036 0-14.386-7.186-23.729-7.186-45.3C0 21.555 23.221.262 50.757.262Zm.772 24.55C38.464 24.126 28.264 33.197 26.014 47.383c-1.864 11.75 1.436 26.071 4.265 26.793 1.2.307 4.078-1.9 6.178-3.879a1.2 1.2 0 0 1 1.45-.15c3.272 2 6.972 3.5 11.05 3.715 13.414.7 25.3-9.8 26.007-23.215.7-13.414-10.021-25.143-23.435-25.843v.008Z"/></svg><span class="sr-only">MAX</span></a>
  <a class="messenger-link" href="https://wa.me/79255054506?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20BMW%20%D0%A2%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F." target="_blank" rel="noreferrer" aria-label="Написать в WhatsApp" title="WhatsApp"><svg class="messenger-icon messenger-icon--whatsapp" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg><span class="sr-only">WhatsApp</span></a>
  <a class="messenger-link" href="https://t.me/+79255054506" target="_blank" rel="noreferrer" aria-label="Написать в Telegram" title="Telegram"><svg class="messenger-icon messenger-icon--telegram" viewBox="0 0 512 512" aria-hidden="true"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480v-83.6c0-4 1.5-7.8 4.2-10.8l167.6-182.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8l-88.3-44.2C7.1 311.3.3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4Z"/></svg><span class="sr-only">Telegram</span></a>`;

const structuredData = document.createElement('script');
structuredData.type = 'application/ld+json';
structuredData.textContent = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: service.shortTitle,
      serviceType: service.title.join(' '),
      url: `https://bmw-territory.ru/services/${serviceKey}`,
      provider: {
        '@type': 'AutoRepair',
        name: 'BMW Территория',
        url: 'https://bmw-territory.ru/',
        telephone: '+7-925-505-45-06',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Ермакова Роща, 7А, стр. 1',
          addressLocality: 'Москва',
          addressCountry: 'RU',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://bmw-territory.ru/' },
        { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://bmw-territory.ru/#services' },
        { '@type': 'ListItem', position: 3, name: service.shortTitle, item: `https://bmw-territory.ru/services/${serviceKey}` },
      ],
    },
  ],
});
document.head.append(structuredData);

const renderRelated = (key) => {
  const item = serviceCatalog[key];
  return `<a class="related-card page-link reveal-card" href="./${key}">
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
    <a class="brand page-link" href="../#home" aria-label="BMW Территория — на главную">
      <span class="brand__roundel"><b>BT</b></span>
      <span class="brand__text"><strong>BMW ТЕРРИТОРИЯ</strong><small>СЕРВИС 1997 · BMW 2006</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Основная навигация">
      <a class="page-link active" href="../#services">УСЛУГИ</a>
      <a class="page-link" href="../#approach">ПОДХОД</a>
      <a class="page-link" href="../#about">О НАС</a>
      <a class="page-link" href="../#contacts">КОНТАКТЫ</a>
    </nav>
    <div class="header-actions">
      <div class="header-contact">
        <div class="header-messengers" aria-label="Написать в мессенджере">
          ${messengerLinksMarkup}
        </div>
        <a class="header-phone" href="tel:+79255054506"><small>ПН–ПТ, 10:00–20:00</small><span>+7 (925) 505-45-06</span></a>
      </div>
      <a class="button button--compact page-link" href="${serviceUrl}"><span>ЗАПИСАТЬСЯ</span>${arrowSvg}</a>
    </div>
    <button class="menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false"><span></span><span></span></button>
  </header>

  <div class="mobile-menu" aria-hidden="true">
    <nav>
      <a class="page-link" href="../#services"><span>01</span> УСЛУГИ</a>
      <a class="page-link" href="../#approach"><span>02</span> ПОДХОД</a>
      <a class="page-link" href="../#about"><span>03</span> О НАС</a>
      <a class="page-link" href="../#contacts"><span>04</span> КОНТАКТЫ</a>
    </nav>
    <div class="mobile-contacts">
      <a class="mobile-phone" href="tel:+79255054506">+7 (925) 505-45-06</a>
      <div class="header-messengers header-messengers--mobile">
        ${messengerLinksMarkup}
      </div>
    </div>
    <a class="button page-link" href="${serviceUrl}">ЗАПИСАТЬСЯ</a>
  </div>

  <main>
    <section class="service-detail-hero">
      <div class="service-detail-hero__grid" aria-hidden="true"></div>
      <div class="service-detail-hero__copy">
        <a class="service-back page-link" href="../#services">${arrowSvg}<span>ВСЕ КОМПЕТЕНЦИИ</span></a>
        <div class="service-eyebrow"><span>${service.number} / 07</span><i></i><em>${service.code}</em></div>
        <h1><span>${service.title[0]}</span><strong>${service.title[1]}</strong></h1>
        <p>${service.lead}</p>
        ${service.valueNote ? `<div class="service-value-note"><span>ПРИНЦИП СЕРВИСА</span><strong>${service.valueNote}</strong></div>` : ''}
        <div class="service-detail-hero__actions">
          <a class="button button--primary page-link" href="${serviceUrl}"><span>ОБСУДИТЬ ЗАДАЧУ</span>${arrowSvg}</a>
          <a class="service-phone" href="tel:+79255054506"><small>КОНСУЛЬТАЦИЯ МАСТЕРА</small><strong>+7 (925) 505-45-06</strong></a>
        </div>
        <div class="service-assurance"><span>СОГЛАСОВАНИЕ ДО РАБОТ</span><span>ПРОФИЛЬНАЯ КОМАНДА</span><span>BMW С 2006 ГОДА</span></div>
      </div>
      <div class="service-detail-hero__visual">
        <img src="${service.image}" alt="${service.shortTitle} BMW" />
        <div class="service-detail-hero__visual-top"><span>ПРОФИЛЬНЫЙ СЕРВИС BMW</span><b>${service.number}</b></div>
        <div class="service-detail-hero__visual-bottom"><span>ИЗ ПРАКТИКИ</span><b>${service.code}</b></div>
        <div class="service-scanline" aria-hidden="true"></div>
      </div>
      <div class="service-detail-hero__rail"><span>${service.number}</span><i></i><em>ЛИСТАЙТЕ</em></div>
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
        ${service.protocol.map((item, index) => `<article class="protocol-step reveal-card"><div><span>0${index + 1}</span><small>${index === 3 ? 'РЕЗУЛЬТАТ' : 'ЭТАП'}</small></div><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}
      </div>
    </section>

    <section class="service-result detail-section">
      <div class="service-result__meta reveal"><span>04 / РЕЗУЛЬТАТ</span><strong>${service.code}</strong></div>
      <div class="service-result__title reveal"><h2>ЧТО ВЫ ПОЛУЧАЕТЕ<br /><span>ПОСЛЕ РАБОТЫ</span></h2><p>Не «попробовали и посмотрим», а зафиксированный результат и понятный следующий шаг.</p></div>
      <div class="service-result__list">
        ${service.result.map((item, index) => `<div class="result-line reveal"><span>0${index + 1}</span><strong>${item}</strong><i>${arrowSvg}</i></div>`).join('')}
      </div>
      <div class="service-result__facts reveal">
        <div><strong>2006</strong><span>ПРОФИЛЬНО<br />С BMW</span></div>
        <div><strong>1997</strong><span>РАБОТАЕТ<br />СЕРВИС</span></div>
        <div><strong>ПЛАН</strong><span>СОГЛАСУЕМ<br />ДО РАБОТ</span></div>
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
    <a class="brand page-link" href="../#home"><span class="brand__roundel"><b>BT</b></span><span class="brand__text"><strong>BMW ТЕРРИТОРИЯ</strong><small>СЕРВИС 1997 · BMW 2006</small></span></a>
    <p>Москва, ул. Ермакова Роща, 7А, стр. 1<br />Пн–Пт, 10:00–20:00</p>
    <p>Независимый профильный сервис.<br />Не является официальным дилером BMW AG.</p>
    <div class="service-footer__meta"><span>ООО «Амитэкс-М»<br />ИНН 7714761130 · ОГРН 5087746582985</span><small>Meta Platforms Inc. признана экстремистской организацией; решение суда не распространяется на WhatsApp.</small><a href="../privacy">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a><span>© 2026</span></div>
  </footer>
`;

const body = document.body;
const header = document.querySelector('.site-header');
const cursorGlow = document.querySelector('.cursor-glow');
const cursorRing = document.querySelector('.cursor-ring');
const transition = document.querySelector('.service-transition');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

document.querySelectorAll('[data-copy-phone]').forEach((link) => {
  link.addEventListener('click', () => {
    const phone = link.dataset.copyPhone;
    if (phone && navigator.clipboard?.writeText) navigator.clipboard.writeText(`+${phone}`).catch(() => {});
  });
});

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
