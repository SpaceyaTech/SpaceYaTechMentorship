
// window.addEventListener('DOMContentLoaded',()=>{
//     console.log(document.querySelector('.listOne'))
// })
console.log(document.getElementsByClassName("btn"))
document.querySelector(".btn").addEventListener('click',function(){
    // Lets create a new element
    let newBall = document.createElement("div");
    let btn = document.querySelector(".btn")
    // Lets add a class to it
    newBall.classList.add("ball");
    newBall.classList.add("animateBall")
    btn.classList.add("btnJs")
    btn.innerText ="The button is now active"
    // Lets add it to the body
    document.querySelector(".ball-container").app(newBall);
    // Lets add an event listener to it
})

