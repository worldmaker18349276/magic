let x = 100;
let y = 100;
let isDragging = false;
const parent = document.body;
const sticker = document.createElement("div");
sticker.style = `position:fixed;z-index:2147483646;left:${x}px;top:${y}px;background:Cornsilk;padding:10px;`;
sticker.contentEditable = true;
parent.appendChild(sticker);

sticker.addEventListener("blur", e => {
  if (!sticker.textContent && !sticker.querySelector(":not(div,span,br)"))
    parent.removeChild(sticker);
});

sticker.addEventListener("mousedown", e => {
  if (e.target === sticker)
    isDragging = true;
});
window.addEventListener("mouseup", e => {
  isDragging = false;
});
window.addEventListener("mousemove", e => {
  if (isDragging) {
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
