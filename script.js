// Small interactive helpers
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form handler (placeholder)
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // In production, replace with real endpoint or service.
    alert('Dziękujemy za wiadomość! (to tylko demo)');
    form.reset();
  });
}
