// As always the first thing we nedd to do is an eventListener to the button.

// We want to listen for a click event on the button

function generateRandomColor() {
  let red = Math.ceil(Math.random() * 255);

  let green = Math.ceil(Math.random() * 255);

  let blue = Math.ceil(Math.random() * 255);
  return `rgba(${red}, ${green}, ${blue},${(Math.random().toFixed(1))})`;
}
let button = document.querySelector("button");
let x;
const handleClick = function () {
  const boxes = document.querySelectorAll(".box");
 x = setInterval(() => {
    boxes.forEach((box, index) => {
      box.style.backgroundColor = generateRandomColor();
      box.style.borderRadius = `${Math.ceil(Math.random() * 100)}%`;
    });
  }, 
  1000)
  setTimeout(()=>{
    clearInterval(x)
  },10000)
}
button.addEventListener("click", handleClick);
  

// setTimeout(()=>{
//   console.log('Running')
//   clearInterval(x)
// },7000)




// Calls the callback function once after x amount of time has passed
// setTimeout(()=>{
//  console.log('Called by setTimeout')
// },5000)


// // setinterval will keep calling
// setInterval(()=>{
//   console.log('Called by setInterval')
//  },5000)








