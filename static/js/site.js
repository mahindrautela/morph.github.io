const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const dialog = document.querySelector('.image-dialog');
const dialogImage = dialog?.querySelector('img');
const closeButton = dialog?.querySelector('.dialog-close');

document.querySelectorAll('.figure-open').forEach((button) => {
  button.addEventListener('click', () => {
    if (!dialog || !dialogImage) return;
    dialogImage.src = button.dataset.image || '';
    dialogImage.alt = button.getAttribute('aria-label') || 'Expanded research figure';
    dialog.showModal();
  });
});

closeButton?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') dialog?.close();
});

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const targetId = button.dataset.copyTarget;
    const target = targetId ? document.getElementById(targetId) : null;
    const text = target?.innerText?.trim() || '';

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      const previousLabel = button.textContent;
      button.textContent = 'Copied';
      window.setTimeout(() => {
        button.textContent = previousLabel;
      }, 1200);
    } catch (error) {
      console.error('Clipboard copy failed', error);
    }
  });
});
