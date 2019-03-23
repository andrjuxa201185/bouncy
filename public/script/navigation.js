document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('.nav-bar nav');

    navBar.querySelector('ul').addEventListener('click', (e) => {
        let target = e.target.closest('li');
        alert(target.dataset.link);
    })


    document.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            navBar.classList.add('nav-fixed');
        } else {
            navBar.classList.remove('nav-fixed');
        }
    })
});