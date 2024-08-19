const container = document.querySelector('.container');
const containerWidth = container.offsetWidth; // Dynamically get width of container
const containerHeight = container.offsetHeight; // Dynamically get height of container
const speed = 4; // Movement speed in pixels per frame

let posX = Math.random() * (window.innerWidth - containerWidth);
let posY = Math.random() * (window.innerHeight - containerHeight);
let dirX = (Math.random() - 0.5) * 2; // Random direction (left or right)
let dirY = (Math.random() - 0.5) * 2; // Random direction (up or down)

function updatePosition() {
    posX += dirX * speed;
    posY += dirY * speed;

    // Boundary collision detection
    if (posX <= 0 || posX >= window.innerWidth - containerWidth) {
        dirX *= -1;
    }
    if (posY <= 0 || posY >= window.innerHeight - containerHeight) {
        dirY *= -1;
    }

    container.style.transform = `translate(${posX}px, ${posY}px)`;
}

window.addEventListener('resize', () => {
    // Recalculate container dimensions on window resize
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;
});

setInterval(updatePosition, 16); // ~60 FPS

