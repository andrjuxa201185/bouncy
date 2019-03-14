class Round {
    constructor() {
        // this.ctx = canvas.getContext('2d');
    }

    drow(ctx, angle) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'red';
        ctx.arc(100, 75, 50, 1.5 * Math.PI, angle * Math.PI);
        ctx.stroke();
    }
}


class AnimateRound {
    constructor(round, canvas) {
        this.round = round;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.raf;
        this.angle = 1.5;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.round.drow(this.ctx, this.angle);
        this.angle += 0.01;
        if (this.angle > 3.5 + 0.01) return;
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }


    stopAnimate() {
        cancelAnimationFrame(this.raf);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.round-progress');
    const round = new Round();
    const animateRound = new AnimateRound(round, canvas);
    animateRound.animate();
});