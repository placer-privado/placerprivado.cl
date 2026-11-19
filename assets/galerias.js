(() => {
  const links = document.querySelectorAll('[data-gallery-image]');
  if (!links.length || !('HTMLDialogElement' in window)) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'photo-dialog';
  dialog.setAttribute('aria-label', 'Vista ampliada de la fotografía');
  const close = document.createElement('button');
  close.type = 'button'; close.textContent = 'Cerrar';
  const photo = document.createElement('img');
  dialog.append(close, photo); document.body.append(dialog);
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault(); photo.src = link.href;
    photo.alt = link.querySelector('img').alt; dialog.showModal();
  }));
})();
