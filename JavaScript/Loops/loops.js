// Comparison Operators

// == equal to
// != not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// === strict equal to
// !== strict not equal to

// Logical Operators
// && and
// || or
// ! not


// (5==5 && 10< 11) // true
// (5==5 || 10< 11)
// (5==5 == 10< 11)
// Let's look at looping in JavaScript

// 1. While Loop
// Loop counter
// let start = 0;

// //Loop condition
// while(start < 10) {
//    console.log(start);
//     //Increment the loop counter to avoind an infnite loop
//    start++;
// }

//  let start =11;

// while(start <= 10){
//   console.log("Hello World");
//   start++;
// }



// The first step is to create a variable that will be used to control the loop. 
// This variable is called the loop counter.

// Once we have the loop counter, we can now create the loop condition.

// The loop condition is a boolean expression that will be evaluated before each iteration of the loop.



// 2. Do While Loop

// Loop counter
// let start = 13;

// // Loop condition
// do {
//    console.log(start);
//     //Increment the loop counter to avoid an infnite loop
//    start++;
// } while(start < 10);

// The difference between a while loop and a do while loop is that the do while loop will always execute at least once.


// 3. For Loop

// You can think about the for loop as a combination of the while loop and the do while loop.
// It takes the loop counter, loop condition, and the increment statement and combines them into one statement.

// for(let start = 5; start > 1; start--) {
//     console.log(start * 2);
// };


for(let i = 1; i <10;i++){
 console.log(i)
}

// 4. For In Loop
// The for in loop is used to iterate over the properties of an object.
// for in loop can be used to iterate over arrays but it is not recommended. It is better to use the for of loop.

let sparky = {
    name: "Sparky",
    age: 5,
    breed: "Pitbull",
    spayed: false
}

for (const key in sparky) {
   console.log(key);    
}

// For of loop
// The for of loop is used to iterate over the elements of an array.

let colors = ["red", "green", "blue"];


