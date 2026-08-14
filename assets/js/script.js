const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const menuButton = document.querySelector('[data-menu-button]');

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'メニューを開く' : 'メニューを閉じる');
  menuButton.classList.toggle('is-open', !expanded);
  nav.classList.toggle('is-open', !expanded);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'メニューを開く');
  });
});

const tabs = document.querySelectorAll('[data-filter]');
const courses = document.querySelectorAll('[data-course]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    tabs.forEach((button) => {
      const selected = button === tab;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-selected', String(selected));
    });
    courses.forEach((course) => {
      course.classList.toggle('is-hidden', filter !== 'all' && course.dataset.course !== filter);
    });
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelector('[data-year]').textContent = new Date().getFullYear();
