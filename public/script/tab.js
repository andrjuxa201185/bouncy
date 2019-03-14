class Tab {
    constructor(tab) {
        this.tabNav = tab.querySelector('.tab-nav');
        this.indicators = [...tab.querySelectorAll('.tab-indicator')];
        this.tabItems = [...tab.querySelectorAll('.tab-item')];
    }

    init() {
        if (!this.tabNav || !this.indicators[0] || !this.tabItems[0]) return;

        this.tabNav.addEventListener('click', (e) => {
            const li = e.target.closest('.tab-indicator');
            if (!li) return;
            const index = this.indicators.indexOf(li);

            for (let i = 0; i < this.indicators.length; i++) {
                this.indicators[i].classList.remove('active');
                this.tabItems[i].classList.remove('active');
                this.tabItems[i].classList.remove('show');
            }

            li.classList.add('active');
            this.tabItems[index].classList.add('active');
            setTimeout(() => {
                this.tabItems[index].classList.add('show'); // ??????????
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    for (const tab of tabs) {
        new Tab(tab).init();
    }

});