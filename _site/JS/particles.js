document.addEventListener("DOMContentLoaded", function () {
    const numParticles = 100;
    const particleSize = 5;
    const particles = [];

    function Particle() {
        this.x = Math.random() * window.innerWidth;
        this.y = window.innerHeight;
        this.size = Math.random() * particleSize + 2;

        this.speed = Math.random() * 1 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.direction = Math.random() * Math.PI * 2;

        // Start color (white or #2b5477)
        this.startColor = Math.random() < 0.5 ? [255, 255, 255] : [43, 84, 119]; // RGB for white and #2b5477
        // End color (opposite of start)
        this.endColor = this.startColor[0] === 255 ? [43, 84, 119] : [255, 255, 255];

        this.colorTransitionSpeed = Math.random() * 0.01 + 0.002; // How fast the color changes
        this.colorProgress = 0; // Progress between start and end color (0 to 1)
    }

    Particle.prototype.update = function () {
        this.y -= this.speed;

        this.x += Math.sin(this.direction) * 0.5;

        if (this.y < 0) {
            this.y = window.innerHeight;
            this.x = Math.random() * window.innerWidth;
        }

        // Update color transition progress
        this.colorProgress += this.colorTransitionSpeed;
        if (this.colorProgress >= 1) {
            this.colorProgress = 0;
            // Swap start and end colors
            [this.startColor, this.endColor] = [this.endColor, this.startColor];
        }
    };

    Particle.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        // Interpolate between startColor and endColor
        const r = this.startColor[0] + (this.endColor[0] - this.startColor[0]) * this.colorProgress;
        const g = this.startColor[1] + (this.endColor[1] - this.startColor[1]) * this.colorProgress;
        const b = this.startColor[2] + (this.endColor[2] - this.startColor[2]) * this.colorProgress;

        ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    };

    function createParticles() {
        const canvas = document.createElement("canvas");
        document.getElementById("particles").appendChild(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext("2d");

        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw(ctx);
            });

            requestAnimationFrame(animate);
        }

        animate();
    }

    createParticles();
});
