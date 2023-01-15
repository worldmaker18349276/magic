let x = 0;
let y = 0;
const alpha = 0.5;
const parent = document.body;

const screen = document.createElement("div");
const focus = document.createElement("div");
screen.style = "position:fixed;z-index:2147483646;width:100%;height:100%;top:0;left:0;cursor:crosshair;";
focus.style = `position:relative;outline:rgba(0,0,0,${alpha}) 10000px solid;top:0;left:0;width:10000px;height:10000px;`;

screen.appendChild(focus);
parent.appendChild(screen);

screen.addEventListener("mousedown", e => {
  if (e.buttons == 1) {
    x = e.x;
    y = e.y;
    focus.style.left = "0";
    focus.style.top = "0";
    focus.style.width = "100%";
    focus.style.height = "100%";
  }
});

screen.addEventListener("mousemove", e => {
  if (e.buttons == 1) {
    let [x1, x2] = [x, e.x].sort((a, b) => a - b);
    let [y1, y2] = [y, e.y].sort((a, b) => a - b);
    focus.style.left = x1 + "px";
    focus.style.top = y1 + "px";
    focus.style.width = (x2 - x1) + "px";
    focus.style.height = (y2 - y1) + "px";
  }
});

screen.addEventListener("dblclick", e => {
  parent.removeChild(screen);
}, {
  once: true
});
