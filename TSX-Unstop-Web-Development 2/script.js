document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      alert('Thank you for your message!');
      // Reset form
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  