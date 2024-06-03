function initMouseTrail() {
	const config = {
		maxTrailLength: 10,  
		lineWidth: 3,         
		startColor: [255, 0, 0], 
		endColor: [0, 0, 255],   
		fadeOutSpeed: 1        
	};

    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    let trail = [];
    let lastMousePosition = { x: 0, y: 0 };

    function lerpColor(a, b, amount) {
        const [ar, ag, ab] = a;
        const [br, bg, bb] = b;
        return [
            ar + amount * (br - ar),
            ag + amount * (bg - ag),
            ab + amount * (bb - ab)
        ].map(Math.round);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 1; i < trail.length; i++) {
            const gradientRatio = i / trail.length;
            const color = lerpColor(config.startColor, config.endColor, gradientRatio);

            ctx.beginPath();
            ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
            ctx.lineTo(trail[i].x, trail[i].y);
            ctx.strokeStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
        }
    }

    function updateTrail() {
        if (lastMousePosition.x !== 0 && lastMousePosition.y !== 0) {
            trail.push({ ...lastMousePosition });
        }

        if (trail.length > config.maxTrailLength) {
            trail = trail.slice(config.fadeOutSpeed); // 使用 slice 来控制轨迹淡出速度
        }
    }

    window.addEventListener('mousemove', (event) => {
        lastMousePosition.x = event.pageX;
        lastMousePosition.y = event.pageY;
    });

    function animate() {
        updateTrail();
        draw();
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initMouseTrail);
} 
else {
	initMouseTrail()
}