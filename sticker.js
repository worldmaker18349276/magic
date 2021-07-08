let x = 100;
let y = 100;
let sticker = document.createElement("div");
sticker.style = "position:fixed;z-index:1000;left:"+x+"px;top:"+y+"px;background:Cornsilk;padding:10px;";
sticker.contentEditable = true;
document.body.appendChild(sticker);

let isDragging = false;
sticker.addEventListener("mousedown", e => {
  if ( e.target === sticker )
    isDragging = true;
});
sticker.addEventListener("blur", e => {
  if ( Array.from(sticker.childNodes).every(n => n.nodeName.toLowerCase()=="br") )
    document.body.removeChild(sticker);
});
window.addEventListener("mouseup", e => {
  isDragging = false;
});
window.addEventListener("mousemove", e => {
  if ( isDragging ) {
    x += e.movementX;
    y += e.movementY;
    sticker.style.left = x + "px";
    sticker.style.top = y + "px";
  }
});

document.execCommand('enableObjectResizing');
document.execCommand('enableAbsolutePositionEditor');
document.execCommand('enableInlineTableEditing');
sticker.focus();
