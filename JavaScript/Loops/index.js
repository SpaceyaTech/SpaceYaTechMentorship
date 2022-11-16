// Let's look at loops in JavaScript

// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Do while loop

let r = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

// For in loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
}
// For in works on objects
for (let key in person) {
    console.log(key);
    console.log(person[key]);
}

// For of loop
// For of works on Arrays
let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}

//Switch
let role = "guest";
switch (role) {
    case "guest":
        console.log("Guest User");
        break;
    case "moderator":
        console.log("Moderator User");
        break;
    default:
        console.log("Unknown User");
}



// Let's create balls using a loop

// Create a function that creates a ball
function createBall() {
    let ball;
    let container = document.querySelector(".container");
    for(let i =0; i < 20;i++){
        ball = document.createElement("div");
        ball.classList.add("ball");
        container.appendChild(ball);
    }
}
createBall()


























