class AnimateRound {
    constructor(canvas, elem, max) {
        this.elem = elem;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.raf = null;
        this.startAngle = 1.5;
        this.max = (2 * max / 100) + 1.5; 
        this.speed = max / 7000;
    }

    drow(angle) {
        this.ctx.beginPath();
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = '#d1d8e4';
        this.ctx.arc(75, 75, 50, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#19bd9a';
        this.ctx.arc(75, 75, 50, 1.5 * Math.PI, angle * Math.PI);
        this.ctx.stroke();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.drow(this.startAngle);
        this.elem.innerHTML = Math.round((this.startAngle - 1.5) / 2 * 100) + '%';
        this.startAngle += this.speed;
        if (this.startAngle > this.max + this.speed) return;
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }
}

function startProgressBar() {
    const canvas = document.querySelectorAll('.active .round-progress');
    const showPercent = document.querySelectorAll('.active .show-percent');

    for (let i = 0; i < canvas.length; i++) {
        canvas[i].width = 150;
        canvas[i].height = 150;
        new AnimateRound(canvas[i], showPercent[i], 60 + Math.random() * 40).animate();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const windowHeight = window.innerHeight;
    const tabNavServices = document.querySelector('.services .tab-nav');
    const blockRoundProgress = document.querySelector('.services .tab-content');
    let flag = false;

    document.addEventListener('scroll', () => {
        const blockCoord = blockRoundProgress.getBoundingClientRect().top;

        if ( blockCoord < windowHeight && blockCoord > -100) {
            if (!flag) {
                startProgressBar();
                flag = true;
            }
        } else {
            flag = false;
        }
    });

    tabNavServices.addEventListener('click', () => {
        startProgressBar();
    });

    
});