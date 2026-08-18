const body = document.body;
const header = document.querySelector('.site-header');
const cursorGlow = document.querySelector('.cursor-glow');
const cursorRing = document.querySelector('.cursor-ring');
const heroCar = document.querySelector('.hero-car');
const transition = document.querySelector('.section-transition');
const transitionTitle = transition.querySelector('strong');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('load', () => {
  window.setTimeout(() => body.classList.add('is-loaded'), 180);
  window.setTimeout(() => body.classList.add('car-arrived'), 1950);
});

window.setTimeout(() => body.classList.add('is-loaded'), 1500);
window.setTimeout(() => body.classList.add('car-arrived'), 2600);

const setMenu = (open) => {
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  body.classList.toggle('is-locked', open);
};

menuToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('is-open')));

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId?.startsWith('#') || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    setMenu(false);
    transitionTitle.textContent = link.dataset.sectionName || 'BMW ТЕРРИТОРИЯ';
    transition.classList.remove('is-active');
    void transition.offsetWidth;
    transition.classList.add('is-active');

    window.setTimeout(() => {
      const offset = header.offsetHeight - 1;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'auto' });
    }, 285);

    window.setTimeout(() => transition.classList.remove('is-active'), 680);
  });
});

document.querySelectorAll('.page-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    transitionTitle.textContent = link.querySelector('h3')?.textContent.replace(/\s+/g, ' ').trim() || 'УСЛУГА BMW';
    transition.classList.remove('is-active');
    void transition.offsetWidth;
    transition.classList.add('is-active');

    window.setTimeout(() => {
      window.location.href = link.href;
    }, 310);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');

      if (entry.target.matches('[data-count]')) {
        animateCount(entry.target);
      }

      observer.unobserve(entry.target);
    });
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
);

document.querySelectorAll('.reveal, .reveal-card, [data-count]').forEach((element, index) => {
  if (element.classList.contains('reveal-card')) {
    element.style.transitionDelay = `${Math.min((index % 4) * 55, 165)}ms`;
  }
  observer.observe(element);
});

const animateCount = (element) => {
  const target = Number(element.dataset.count);
  const start = performance.now();
  const duration = 1150;

  const frame = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(target * eased);
    if (progress < 1) requestAnimationFrame(frame);
  };

  requestAnimationFrame(frame);
};

const sections = [...document.querySelectorAll('main section[id]')];
const desktopLinks = [...document.querySelectorAll('.desktop-nav a')];
const serviceVisuals = [...document.querySelectorAll('.service-card__visual')];

const updateOnScroll = () => {
  const y = window.scrollY;
  const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  header.classList.toggle('is-scrolled', y > 30);
  document.documentElement.style.setProperty('--scroll-progress', Math.min((y / scrollRange) * 100, 100).toFixed(2));
  document.documentElement.style.setProperty('--wheel-turn', `${y * 0.58}deg`);

  if (heroCar && window.innerWidth > 760 && y < window.innerHeight * 1.2) {
    const drift = Math.min(y * 0.08, 62);
    heroCar.style.marginRight = `${drift}px`;
  } else if (heroCar && window.innerWidth <= 760) {
    heroCar.style.marginRight = '';
  }

  serviceVisuals.forEach((visual) => {
    const rect = visual.getBoundingClientRect();
    if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;
    const distance = window.innerHeight * 0.5 - (rect.top + rect.height * 0.5);
    const shift = Math.max(-18, Math.min(distance * 0.035, 18));
    visual.style.setProperty('--photo-shift', `${shift.toFixed(1)}px`);
  });

  let current = 'home';
  sections.forEach((section) => {
    if (y >= section.offsetTop - 180) current = section.id;
  });
  desktopLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};

let scrollFrame = 0;
window.addEventListener('scroll', () => {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    updateOnScroll();
    scrollFrame = 0;
  });
}, { passive: true });
updateOnScroll();

if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let pointerX = -100;
  let pointerY = -100;
  let ringX = -100;
  let ringY = -100;

  const renderCursor = () => {
    ringX += (pointerX - ringX) * 0.16;
    ringY += (pointerY - ringY) * 0.16;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderCursor);
  };
  renderCursor();

  window.addEventListener('pointermove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

    if (heroCar && window.scrollY < window.innerHeight) {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 7;
      heroCar.querySelector('.hero-car__svg').style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  });

  document.querySelectorAll('a, button, input, textarea, select, .service-card').forEach((element) => {
    element.addEventListener('pointerenter', () => body.classList.add('cursor-active'));
    element.addEventListener('pointerleave', () => body.classList.remove('cursor-active'));
  });

  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.13;
      button.style.setProperty('--magnetic-x', `${x.toFixed(1)}px`);
      button.style.setProperty('--magnetic-y', `${y.toFixed(1)}px`);
    });
    button.addEventListener('pointerleave', () => {
      button.style.setProperty('--magnetic-x', '0px');
      button.style.setProperty('--magnetic-y', '0px');
    });
  });
}

const bookingForm = document.querySelector('#bookingForm');
const requestedService = new URLSearchParams(window.location.search).get('service');

if (requestedService) {
  const requestField = bookingForm.querySelector('textarea[name="message"]');
  if (requestField && !requestField.value) {
    requestField.value = `Интересует услуга: ${requestedService}. `;
  }
}

document.querySelectorAll('[data-copy-phone]').forEach((link) => {
  link.addEventListener('click', () => {
    const phone = link.dataset.copyPhone;
    if (phone && navigator.clipboard?.writeText) navigator.clipboard.writeText(`+${phone}`).catch(() => {});
  });
});

const phoneInput = document.querySelector('input[name="phone"]');
const phoneError = document.querySelector('#phoneError');
const getPhoneDigits = () => phoneInput.value.replace(/\D/g, '');
const validatePhone = (showError = false) => {
  const isValid = getPhoneDigits().length === 11;
  phoneInput.setCustomValidity(isValid ? '' : 'Укажите номер полностью — 11 цифр.');
  phoneInput.setAttribute('aria-invalid', String(!isValid && phoneInput.value.length > 0));
  phoneError?.classList.toggle('is-visible', showError && !isValid);
  return isValid;
};

phoneInput.addEventListener('input', (event) => {
  let digits = event.target.value.replace(/\D/g, '');
  if (digits.startsWith('8')) digits = `7${digits.slice(1)}`;
  if (digits && !digits.startsWith('7')) digits = `7${digits}`;
  digits = digits.slice(0, 11);

  let formatted = digits ? '+7' : '';
  if (digits.length > 1) formatted += ` (${digits.slice(1, 4)}`;
  if (digits.length >= 4) formatted += ') ';
  if (digits.length > 4) formatted += digits.slice(4, 7);
  if (digits.length > 7) formatted += `-${digits.slice(7, 9)}`;
  if (digits.length > 9) formatted += `-${digits.slice(9, 11)}`;
  event.target.value = formatted;
  validatePhone(event.target.value.length > 0);
});

phoneInput.addEventListener('blur', () => validatePhone(true));

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validatePhone(true)) {
    phoneInput.focus();
    bookingForm.reportValidity();
    return;
  }
  const formData = new FormData(bookingForm);
  const value = (name) => String(formData.get(name) || '').trim();
  const message = [
    'Здравствуйте! Заявка с сайта BMW Территория.',
    '',
    `Имя: ${value('name')}`,
    `Телефон: ${value('phone')}`,
    `Автомобиль: ${value('car')}`,
    value('model') ? `Модель / год: ${value('model')}` : '',
    value('message') ? `Что нужно сделать: ${value('message')}` : '',
  ]
    .filter(Boolean)
    .join('\n');
  const whatsappUrl = `https://wa.me/79255054506?text=${encodeURIComponent(message)}`;
  const success = bookingForm.querySelector('.form-success');
  success.classList.add('is-visible');
  window.setTimeout(() => {
    window.location.href = whatsappUrl;
  }, 320);
});
