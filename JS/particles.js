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
    }
    
    Particle.prototype.update = function () {
        this.y -= this.speed;
        
        this.x += Math.sin(this.direction) * 0.5;
        
        if (this.y < 0) {
            this.y = window.innerHeight;
            this.x = Math.random() * window.innerWidth;
        }
    };
    
    Particle.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    };
    
    function createParticles() {
        const canvas = document.createElement('canvas');
        document.getElementById('particles').appendChild(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    createParticles();
});
