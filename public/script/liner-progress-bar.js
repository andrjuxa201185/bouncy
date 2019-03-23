class AnimateLine{
    constructor(canvas, elem, max) {
        this.elem = elem;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.raf = null;
        this.startAngle = 0;
        this.max = max;
        this.speed = max / 120;
    }

    drow(max) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#b2b3b381';
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(0, 3);
        this.ctx.lineTo(this.canvas.width, 3);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#19bd9a';
        this.ctx.lineWidth = 4;
        this.ctx.moveTo(0, 3);
        this.ctx.lineTo(this.canvas.width * max / 100, 3);
        this.ctx.stroke();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.drow(this.startAngle);
        this.elem.innerHTML = Math.round(this.startAngle) + '%';
        this.startAngle += this.speed;
        if (this.startAngle > this.max + this.speed) {
            window.cancelAnimationFrame(this.raf);
            this.raf = null;
            return;
        };
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }
}

function startLinerProgressBar() {
    const canvas = document.querySelectorAll('.active .liner-progress');
    const showPercent = document.querySelectorAll('.active .percent');

    for (let i = 0; i < canvas.length; i++) {
        canvas[i].width = 350;
        canvas[i].height = 6;
        new AnimateLine(canvas[i], showPercent[i], 40 + Math.random() * 60).animate();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const windowHeight = window.innerHeight;
    const tabNavServices = document.querySelector('.team .tab-nav');
    const blockRoundProgress = document.querySelector('.team .tab-content');
    let flag = false;
    startLinerProgressBar();

    document.addEventListener('scroll', () => {
        const blockCoord = blockRoundProgress.getBoundingClientRect().top;

        if ( blockCoord < windowHeight && blockCoord > -100) {
            if (!flag) {
                startLinerProgressBar();
                flag = true;
            }
        } else {
            flag = false;
        }
    });

    tabNavServices.addEventListener('click', () => {
        startLinerProgressBar();
    });    
});