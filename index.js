//Optimized code

const navbar = document.querySelector(".navbar");
const openIcon = document.querySelector(".open-menu");
const closeIcon = document.querySelector(".close-menu");
const draggable = document.querySelector(".draggable");

navbar.addEventListener("dblclick", () => {
  navbar.classList.toggle("active");
});

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const handleDragStart = (e) => {
  isDragging = true;
  const rect = draggable.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  draggable.style.transition = "none";
};

draggable.addEventListener("mousedown", handleDragStart);
draggable.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  handleDragStart(touch);
});

const handleDrag = (e) => {
  if (!isDragging) return;

  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;

  const posX = clientX - offsetX;
  const posY = clientY - offsetY;

  draggable.style.left = posX + "px";
  draggable.style.top = posY + "px";
};

document.addEventListener("mousemove", handleDrag);
document.addEventListener("touchmove", (e) => {
  if (e.touches.length === 1) {
    handleDrag(e.touches[0]);
  }
});

const endDragging = () => {
  isDragging = false;
};

document.addEventListener("mouseup", endDragging);
document.addEventListener("touchend", endDragging);
document.addEventListener("touchcancel", endDragging);

//================================

// const navbar = document.querySelector(".navbar");
// const openIcon = document.querySelector(".open-menu");
// const closeIcon = document.querySelector(".close-menu");
// const draggable = document.querySelector(".draggable");

// navbar.addEventListener("dblclick", function () {
//   navbar.classList.toggle("active");
// });

// let isDragging = false;
// let offsetX = 0;
// let offsetY = 0;

// draggable.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   const rect = draggable.getBoundingClientRect();
//   offsetX = e.clientX - rect.left;
//   offsetY = e.clientY - rect.top;
//   draggable.style.transition = "none";
// });

// document.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;

//   const posX = e.clientX - offsetX;
//   const posY = e.clientY - offsetY;

//   draggable.style.left = posX + "px";
//   draggable.style.top = posY + "px";
// });

// document.addEventListener("mouseup", () => {
//   isDragging = false;
//   //   draggable.style.transition = "transform 0.3s ease-out";
// });
