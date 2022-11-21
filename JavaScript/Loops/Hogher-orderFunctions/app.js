// When we went through functions in JavaScript, we mentioned that functions are first-class objects in JavaScript.

// This means that functions can be passed as arguments to other functions, and can be returned by other functions.


// This is a very powerful feature of JavaScript, and is known as higher-order functions.

// Let's look at an example of a higher-order function.

// Let's create a function that takes another function as an argument.

 function greet(fnMessage) {
     console.log(fnMessage());
 }

// // Let's create another function that we will pass to the greet function.

function getMessage() {
    return "Hello World";
}

// // Let's call the greet function and pass the getMessage function as an argument.

greet(getMessage);

// JavaScript comes with a set of built-in higher-order functions.

// These functions are called Array methods.

// Let's look at some of the most commonly used Array methods.

// Let's create an array of numbers.

let numbers = [1, 2, 3];

// // Let's create a new array by iterating through the numbers array and multiplying each element by 2.

// // The map method takes a callback function as an argument.

// // The callback function takes 3 arguments:

// // 1. The current element

// // 2. The index of the current element

// // 3. The array that map was called on

// // The map method returns a new array.

let doubled = numbers.map(function(number) {
    return number * 2;
});

