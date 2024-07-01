function setupMenuClickListeners() {
  const menuItems = document.querySelectorAll('.list-menu a');

  menuItems.forEach(item => {
      item.addEventListener('click', (event) => {
          const url = item.getAttribute('href');
          if (url !== '#' && url !== 'index.html') {  
              event.preventDefault();  
              window.location.href = url; // Abre o link na mesma guia
          }
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupMenuClickListeners();
  setupButtonClickListeners();
});

const form = document.getElementById('contactForm');
const successMessage = document.querySelector('.success-message');
const okButton = document.getElementById('okBtn');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  successMessage.style.display = 'block';
});

