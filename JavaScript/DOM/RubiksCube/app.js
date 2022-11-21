// As always the first thing we nedd to do is an eventListener to the button.

// We want to listen for a click event on the button

function generateRandomColor() {
  let red = Math.ceil(Math.random() * 255);

  let green = Math.ceil(Math.random() * 255);

  let blue = Math.ceil(Math.random() * 255);

  return `rgba(${red}, ${green}, ${blue},${Math.ceil(Math.random())})`;
}
let button = document.querySelector("button");

let x;
button.addEventListener("click", function () {
  const boxes = Array.from(document.querySelectorAll(".box"));
  x = setInterval(() => {
    boxes.forEach((box, index) => {
      box.style.backgroundColor = generateRandomColor();
      box.style.borderRadius = `${Math.ceil(Math.random() * 100)}%`;
    });
  }, 1100);
  
});

button.addEventListener("dblclick", function () {
 window.clearInterval();
});
