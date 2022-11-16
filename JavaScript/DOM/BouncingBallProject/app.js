// The first thing we need to do is an eventListener to the button.
// We want to listen for a click event on the button


let button = document.querySelector("button");
button.addEventListener("click", function() {
    let ball = document.querySelector(".ball");
    ball.classList.add("animateBall")
    document.body.style.backgroundColor = generateRandomColor();
})


button.addEventListener("dblclick", function() {
    let ball = document.querySelector(".ball");
    ball.classList.remove("animateBall")
    document.body.style.backgroundColor = "white";
})
function generateRandomColor() {
    let red = Math.ceil(Math.random()*255)
    //console.log(red)

    let green = Math.ceil(Math.random()*255)
    //console.log(green)
    let blue = Math.ceil(Math.random()*255)
    //console.log(blue)
    
    return `rgb(${red}, ${green}, ${blue})`
}

// document.onload = function() {
//     document.body.style.backgroundColor = generateRandomColor();
// }


//console.log(generateRandomColor());

//console.log()



// let person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     extendedFamily:{
       
//     }
// }

// document.body.addEventListener('click',function(){
//     let ball = document.querySelector(".ball")
//     document.body.style.backgroundColor ="violet"   
// })

// button.addEventListener('mouseenter',function() {
//     let ball = document.querySelector(".ball");
//     ball.classList.add("animateBall")
// })

// button.addEventListener('mouseleave',function() {
//     let ball = document.querySelector(".ball");
//     ball.classList.remove("animateBall")
// })















//const button = document.querySelector("button");


//button.addEventListener('click',function(){
    // get the ball element and add a class to it
  //const ball = document.querySelector(".ball");
  //ball.classList.add('animateBall')
//})


//button.addEventListener('dblclick',function(){
  //  const ball = document.querySelector(".ball");
    //ball.classList.add('animateBall')
    //ball.classList.remove('animateBall')
    //console.log("Button Double clicked")
//})



