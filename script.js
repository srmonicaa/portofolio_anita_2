const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 30
    ? '0 16px 38px rgba(80,60,70,.16)'
    : '0 12px 34px rgba(80,60,70,.12)';
});
