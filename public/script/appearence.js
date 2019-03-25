document.addEventListener('DOMContentLoaded', () => {
    const h3 = document.querySelectorAll('h3');
    const windowHeight = window.innerHeight;
    let h3Top;

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