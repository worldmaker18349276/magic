let down = false;
let prevX = 0;
let prevY = 0;
const parent = document.body;
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
const picker = document.createElement("input");

canvas.width = parent.scrollWidth;
canvas.height = parent.scrollHeight;
canvas.style = "position:absolute;top:0;left:0;background:transparent;z-index:2147483646;cursor:pointer;";
parent.appendChild(canvas);

picker.type = "color";
picker.value = "#000000";
picker.style = "position:fixed;right:5px;bottom:5px;z-index:2147483646;";
picker.addEventListener("change", e => {
  context.strokeStyle = context.fillStyle = picker.value;
});
parent.appendChild(picker);

context.fillStyle = "black";
context.strokeStyle = "black";
context.lineWidth = 2;
canvas.addEventListener("mousedown", e => {
  down = true;
  if (e.ctrlKey) {
    context.clearRect(e.pageX - 10, e.pageY - 10, 20, 20);
  } else {
    context.fillRect(e.pageX - 1, e.pageY - 1, 1, 1);
  }
  prevX = e.pageX;
  prevY = e.pageY;
});
canvas.addEventListener("mousemove", e => {
  if (down) {
    if (e.ctrlKey) {
      context.clearRect(e.pageX - 10, e.pageY - 10, 20, 20);
    } else {
      context.beginPath();
      context.moveTo(prevX, prevY);
      context.lineTo(e.pageX, e.pageY);
      context.stroke();
      context.closePath();
    }
    prevX = e.pageX;
    prevY = e.pageY;
  }
});
canvas.addEventListener("mouseup", e => {
  down = false;
});
canvas.addEventListener("dblclick", e => {
  parent.removeChild(canvas);
  parent.removeChild(picker);
}, {
  once: true
});
