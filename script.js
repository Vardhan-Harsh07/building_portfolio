const container = document.querySelector('.container');
const containerWidth = container.offsetWidth; 
const containerHeight = container.offsetHeight;  
const speed = 4;  

let posX = Math.random() * (window.innerWidth - containerWidth);
let posY = Math.random() * (window.innerHeight - containerHeight);
let dirX = (Math.random() - 0.5) * 2;  
let dirY = (Math.random() - 0.5) * 2;  

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
    
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;
});

setInterval(updatePosition, 16);  

