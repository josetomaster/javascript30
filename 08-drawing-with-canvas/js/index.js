const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let width = 1;
let direction = 'right';
function draw(e){
    if(!isDrawing) return;
    context.strokeStyle = `hsl(${hue},100%,50%)`;
    context.beginPath();
    context.moveTo(lastX,lastY);
    context.lineTo(e.offsetX, e.offsetY);  
    context.stroke();
    context.lineWidth = width;
    lastX = e.offsetX;
    lastY = e.offsetY;

    hue++;
    
    if(width > 80)
        direction = 'left';
    if(width < 2)
        direction = 'right';

    if(direction ==='left')
        width--;
    else
        width++;
    
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout',() => isDrawing = false);
