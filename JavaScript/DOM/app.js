


document.querySelector('.listOne')

document.querySelector(".btn").addEventListener('click',function(){
    // Lets create a new element
    let newBall = document.createElement("div");
    let btn = document.querySelector(".btn")
    // Lets add a class to it
    newBall.classList.add("ball");
    newBall.classList.add("animateBall")
    btn.classList.add("btnJs")
    btn.innerHTML ="This Button is now active"
    // Lets add it to the body
    document.querySelector(".ball-container").appendChild(newBall);
    // Lets add an event listener to it
})

