const initApp = () => {
  const hamburger = document.querySelector('.hamburger');
  const topLinks = document.querySelector('.Higher-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topLinks.classList.toggle('active');
  });

  document.querySelectorAll('.Higher-link').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    topLinks.classList.remove('active');
  }));
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});