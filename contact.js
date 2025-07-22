document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('contactStatus');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    statusDiv.textContent = '';
    statusDiv.className = 'contact-status';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      statusDiv.textContent = 'Please fill in all fields.';
      statusDiv.classList.add('error');
      return;
    }

    // Simulate sending (replace with real API integration as needed)
    statusDiv.textContent = 'Sending...';
    statusDiv.classList.remove('error');
    statusDiv.classList.add('sending');

    setTimeout(function() {
      statusDiv.textContent = 'Thank you for contacting us! We will respond soon.';
      statusDiv.classList.remove('sending');
      statusDiv.classList.add('success');
      form.reset();
    }, 1500);
  });
});
