
document.addEventListener('DOMContentLoaded', () => {
  const quoteForm = document.getElementById('quoteForm');
  if (!quoteForm) return;

  const formStatus = document.getElementById('formStatus');
  quoteForm.addEventListener('submit', e => {
    e.preventDefault();

    if (!quoteForm.reportValidity()) return;

    if (formStatus) {
      formStatus.textContent = 'La solicitud no se envió: falta conectar un servicio seguro. Tus datos no fueron transmitidos ni guardados.';
    }
  });
});
