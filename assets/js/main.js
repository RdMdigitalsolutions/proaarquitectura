const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const chatButton = document.querySelector('.whatsapp-button');
const chatPanel = document.querySelector('.whatsapp-panel');
const chatClose = document.querySelector('.chat-close');
const form = document.querySelector('#contact-form');

const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 28);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const toggleChat = (forceOpen) => {
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : chatPanel.hidden;
  chatPanel.hidden = !shouldOpen;
  chatButton.setAttribute('aria-expanded', String(shouldOpen));
};
chatButton?.addEventListener('click', () => toggleChat());
chatClose?.addEventListener('click', () => toggleChat(false));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') toggleChat(false);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = `Consulta web PROA - ${data.get('consulta')}`;
  const body = [
    `Nombre: ${data.get('nombre')}`,
    `Teléfono: ${data.get('telefono')}`,
    `Email: ${data.get('email')}`,
    `Consulta: ${data.get('consulta')}`,
    '',
    'Mensaje:',
    data.get('mensaje')
  ].join('\n');

  window.location.href = `mailto:administracio@proarquitectura.cat?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
