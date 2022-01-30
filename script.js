window.addEventListener('load', () => {
    // Static Vars
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Dynamic Vars
    let painting = false;

    // Resizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Main Funcs
    function startPos(e) {
        if (e.button === 0) {
            painting = true;
            draw(e);
        }
    };

    function finishPos() {
        painting = false;
        ctx.beginPath();
    };

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = (fontSize.value <= 100) && (fontSize) ? fontSize.value : 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color.value;

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // Main Listeners
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', finishPos);
    canvas.addEventListener('mousemove', draw);
});

window.addEventListener('keydown', (e) => {
    console.log(e);
});
