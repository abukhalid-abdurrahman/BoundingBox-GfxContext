const gfxCanvasEl = document.getElementById('gfx-canvas');
const width = 500;
const height = 500;
const imageUrl = '../res/face.jpg';

document.addEventListener("DOMContentLoaded", async function() {
    const gfx = gfxCanvasEl.getContext('2d');
    const img = new Image();
    await new Promise(x => img.onload = x, img.src = imageUrl);
    gfx.canvas.width = width;
    gfx.canvas.height = height;

    gfx.drawImage(img, 0, 0, width, height);
    
    gfx.globalAlpha = 0.2;
    gfx.fillStyle = "blue";
    gfx.fillRect(60, 10, 380, 450);
});