window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = 0;
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
  const h3 = document.querySelectorAll('h3');
  const windowHeight = window.innerHeight;

  document.addEventListener('scroll', () => {
    for (let i = 0; i < h3.length; i++) {
      let h3Top = h3[i].getBoundingClientRect().top;
      if (h3Top > 0 && h3Top < windowHeight) {
        h3[i].classList.add('opacity-1');
      } else {
        h3[i].classList.remove('opacity-1');
      }
    }
  });
});