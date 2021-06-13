let down = false,
  prevX = 0,
  prevY = 0,
  canvas = document.createElement("canvas"),
  ctx = canvas.getContext("2d"),
  picker = document.createElement("input");

canvas.width = document.body.scrollWidth;
canvas.height = document.body.scrollHeight;
canvas.style = "position:absolute;top:0;left:0;background:transparent;z-index:1000;";
document.body.appendChild(canvas);

picker.type = "color";
picker.value = "#000000";
picker.style = "position:fixed;right:5px;bottom:5px;z-index:1001;";
picker.addEventListener("change", e => {ctx.strokeStyle=ctx.fillStyle=picker.value;});
document.body.appendChild(picker);

ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
canvas.addEventListener("mousedown", e => {
  down = true;
  if (e.ctrlKey) ctx.clearRect(e.pageX - 10, e.pageY - 10, 20, 20);
  else ctx.fillRect(e.pageX - 1, e.pageY - 1, 1, 1);
  prevX = e.pageX;
  prevY = e.pageY;
});
canvas.addEventListener("mousemove", e => {
  if (down) {
    if (e.ctrlKey) ctx.clearRect(e.pageX - 10, e.pageY - 10, 20, 20);
    else {
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(e.pageX, e.pageY);
      ctx.stroke();
      ctx.closePath();
    }
    prevX = e.pageX;
    prevY = e.pageY;
  }
});
canvas.addEventListener("mouseup", e => down=false);
window.addEventListener("keydown", e => e.key == "Escape" && document.body.removeChild(canvas) && document.body.removeChild(picker), {once: true});
