document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('newsletter-popup');
  if (!popup) return;

  const closeBtn = popup.querySelector('.popup-close');
  const form = popup.querySelector('form');
  const email = popup.querySelector('input[type="email"]');

  const STORAGE_KEY = 'newsletter_closed';

  if (!localStorage.getItem(STORAGE_KEY)) {
    setTimeout(() => {
      popup.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }, 4000);
  }

  function closePopup() {
    popup.classList.remove('visible');
    document.body.style.overflow = '';
    localStorage.setItem(STORAGE_KEY, 'true');
  }

  closeBtn.addEventListener('click', closePopup);

  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!email.value.includes('@')) return;

    closePopup();
  });
});
