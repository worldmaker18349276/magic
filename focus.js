let x = 0;
let y = 0;
let op = 0.5;

let back = document.createElement("div");
let focus = document.createElement("div");
back.style = "position:fixed;z-index:1000;width:100%;height:100%;top:0;left:0;";
focus.style = "position:relative;outline:rgba(0,0,0,"+op+") 10000px solid;top:0;left:0;width:10000px;height:10000px;";
back.appendChild(focus);
document.body.appendChild(back);

back.addEventListener("mousedown", e => {
  if ( e.buttons == 1 ) {
    x = e.x;
    y = e.y;
    focus.style.left = "0";
    focus.style.top = "0";
    focus.style.width = "100%";
    focus.style.height = "100%";
  }
});

back.addEventListener("mousemove", e => {
  if ( e.buttons == 1 ) {
    let [x1, x2] = [x, e.x].sort((a, b) => a - b);
    let [y1, y2] = [y, e.y].sort((a, b) => a - b);
    focus.style.left = x1 + "px";
    focus.style.top = y1 + "px";
    focus.style.width = (x2 - x1) + "px";
    focus.style.height = (y2 - y1) + "px";
  }
});

window.addEventListener("keydown", e => {
  if ( e.key == "Escape" ) {
    document.body.removeChild(back);
  }
}, {once: true});
