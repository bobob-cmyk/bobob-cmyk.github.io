const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.setAttribute(
      'aria-label',
      navMenu.classList.contains('active') ? '메뉴 닫기' : '메뉴 열기'
    );
  });
}
