// Autoškola V&V — main.js

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close nav when a link is clicked (single-page scroll nav)
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
