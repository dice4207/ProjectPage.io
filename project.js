const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stickFigure = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 2,
    directionX: 1,
    directionY: 1,
};

function drawStickFigure(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Head
    ctx.beginPath();
    ctx.arc(x, y - 20, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();

    // Body
    ctx.moveTo(x, y - 10);
    ctx.lineTo(x, y + 30);

    // Arms
    ctx.lineTo(x - 20, y);
    ctx.moveTo(x, y + 30);
    ctx.lineTo(x + 20, y);

    // Legs
    ctx.moveTo(x, y + 30);
    ctx.lineTo(x - 10, y + 60);
    ctx.moveTo(x, y + 30);
    ctx.lineTo(x + 10, y + 60);

    ctx.stroke();
}

function update() {
    stickFigure.x += stickFigure.speed * stickFigure.directionX;
    stickFigure.y += stickFigure.speed * stickFigure.directionY;

    if (stickFigure.x < 0 || stickFigure.x > canvas.width) {
        stickFigure.directionX *= -1;
    }

    if (stickFigure.y < 0 || stickFigure.y > canvas.height) {
        stickFigure.directionY *= -1;
    }

    drawStickFigure(stickFigure.x, stickFigure.y);
    requestAnimationFrame(update);
}

update();
