document.addEventListener('DOMContentLoaded', () => {
    const tabNav = document.querySelector('.tab-nav');
    const indicators = [...document.querySelectorAll('.tab-indicator')];
    const tabItems = [...document.querySelectorAll('.tab-item')];

    tabNav.addEventListener('click', (e) => {
        const li = e.target.closest('.tab-indicator');
        if (!li) return;

        const index = indicators.indexOf(li);

        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove('active');
            tabItems[i].classList.remove('active');
            tabItems[i].classList.remove('show');
        }

        li.classList.add('active');
        tabItems[index].classList.add('active');
        setTimeout(() => {
            tabItems[index].classList.add('show'); // ??????????
        });
    })

});