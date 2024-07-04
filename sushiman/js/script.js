document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileList = document.querySelector('.mobile-list');
  const menuIcon = document.getElementById('menu-icon');

  menuToggle.addEventListener('click', function() {
      if (mobileList.classList.contains('hide')) {
          mobileList.classList.remove('hide');
          menuIcon.src = 'assets/close.svg'; 
      } else {
          mobileList.classList.add('hide');
          menuIcon.src = 'assets/menu.svg'; 
      }
  });

  document.querySelectorAll('.mobile-list a').forEach(link => {
      link.addEventListener('click', () => {
          mobileList.classList.add('hide');
          menuIcon.src = 'assets/menu.svg'; 
      });
  });

  const btn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          btn.classList.add('show');
      } else {
          btn.classList.remove('show');
      }
  });

  btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
