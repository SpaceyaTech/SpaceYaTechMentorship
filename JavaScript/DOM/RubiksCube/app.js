// As always the first thing we nedd to do is an eventListener to the button.

// We want to listen for a click event on the button

function generateRandomColor() {
  let red = Math.ceil(Math.random()*255)
  //console.log(red)

  let green = Math.ceil(Math.random()*255)
  //console.log(green)
  let blue = Math.ceil(Math.random()*255)
  //console.log(blue)
  
  return `rgba(${red}, ${green}, ${blue},${Math.ceil(Math.random())})`
}
let button = document.querySelector("button");

// 
let x;
button.addEventListener("click", function() {
  const boxes = Array.from(document.querySelectorAll(".box"));
  x = setInterval(() => {
    boxes.forEach((box,index) => {
      box.style.backgroundColor = generateRandomColor();
      // box.style.boxShadow = `0 0 2px ${generateRandomColor()}, 0 0 10px ${generateRandomColor()}`;
      box.style.borderRadius = `${Math.ceil(Math.random()*100)}%`
    });
  }, 1000);  
})
button.addEventListener("dblclick", function() {
    clearInterval(x)
})