document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('header .slider');
    const navBar = document.querySelector('.nav-bar nav');
    const links = document.querySelectorAll('.nav-bar nav a');
    const anchors = [...document.querySelectorAll('.anchor')];
    let windowHeight = window.innerHeight;


    const setActiveLink = (activeLink, links) => {
        for (const a of links) {
            a.classList.remove('active');
        }
        activeLink.classList.add('active');
    }

    const setCurrentAnchor = () => {
        let prevAnchor = anchors[0];
        let  anchorTop;
        for (const anchor of anchors) {
            anchorTop = anchor.getBoundingClientRect().top;
            if (anchorTop >= 0 && anchorTop < (windowHeight)) {
                let curentAnchorName = anchor.name;
                for (const a of links) {
                    if (a.dataset.link === curentAnchorName){
                        setActiveLink(a, links);
                        return;
                    }
                }
            } 
            if (anchorTop < windowHeight / 2){
                prevAnchor = anchor;
            } 
            if (anchorTop > (windowHeight / 2)){
                let curentAnchorName = prevAnchor.name;
                for (const a of links) {
                    if (a.dataset.link === curentAnchorName){
                        setActiveLink(a, links);
                        return;
                    }
                }
            }
        }
    }
    setCurrentAnchor();

    navBar.querySelector('ul').addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        const anchor = document.querySelector(`a[name=${target.dataset.link}]`);

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: "start" });
            setActiveLink(target, links);
        }
    })

    document.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            navBar.classList.add('nav-fixed');
        } else {
            navBar.classList.remove('nav-fixed');
        }
        setCurrentAnchor();
    })

    slider.addEventListener('click', (e) => {
        e.preventDefault();
        if (anchors[1]) {
            anchors[1].scrollIntoView({ behavior: 'smooth', block: "start" });
        }
    })
});