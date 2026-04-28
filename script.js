function sendMessage(e) {
  e.preventDefault();
  alert("Message sent! (Demo)");
}

// Dark mode
document.getElementById('darkToggle')
.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Mobile menu
document.getElementById('menu-toggle')
.addEventListener('click', () => {
  document.getElementById('nav-links')
  .classList.toggle('active');
});