let canvas, ctx;

export function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


window.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    let drawing = false;

    canvas.addEventListener("mousedown", (e) => {
        drawing = true;
        ctx.beginPath();
        const pos = getCanvasCoordinates(e, canvas);
        ctx.moveTo(pos.x, pos.y);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!drawing) return;
        const pos = getCanvasCoordinates(e, canvas);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
    });

    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        drawing = true;
        const touch = e.touches[0];
        const pos = getCanvasCoordinates(touch, canvas);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
      }, { passive: false });
      
      canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        if (!drawing) return;
        const touch = e.touches[0];
        const pos = getCanvasCoordinates(touch, canvas);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      }, { passive: false });
    
    canvas.addEventListener("touchend", () => {
        drawing = false;
    });

    canvas.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });
    canvas.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });

    // loadModel();
});

function getCanvasCoordinates(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
  
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }
