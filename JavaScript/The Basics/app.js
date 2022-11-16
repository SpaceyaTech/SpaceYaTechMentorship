// We covered the DOM in brief and looked at how the browser takes your source code and transforms it into a visual representation of your web page. We also looked at how the DOM is a tree structure and how we can use JavaScript to traverse the DOM and manipulate the elements on the page. We also looked at how we can use the DOM to listen for events and respond to them.

// Lets look at some of the primitive values in JavaScript
// Numbers 
// Strings
// Booleans
// Null
// Undefined
// BigInt
// Symbols (ES6)

let num = 1.5;
let firstName = "Ian"
let isCool = true;
let empty = null;
let notDefined = undefined;
let bigNum = 1234567890123456789012345678901234567890n;
let symbolId = Symbol("id");
let symbolIdTwo = Symbol("id");
firstName = "Mike"

// An Object
// let car = {
//     make: "Ford",
//     "color name": "Red",
//     year:[2015, 2016, 2017],
//     availableModels:{
//         Fiesta: true,
//         Focus: true,
//     }
//     isCool: true,    
// }
// An Array
// let colors = ["red", "blue", "green", true,3];

// colors[2]colors[3]
// Arrays are zero indexed
// green
//console.log(colors[colors.length -1]) // true
//colors.length
//let carYear = car.year;

// Dot Notation
//car.make
// Bracket Notation
//car["make"]

// Accessing arrays in objects
//car.year[2]

//car.availableModels.Fiesta



let pet = {
    name: "Fido",
    age: 3,
    isGoodBoy: true,
    breed:"Pitbull",
}

let animals = ["Cat","Dog","Horse"]

pet.name = "Spot"
console.log(pet.name) // Spot
// Unshift
animals.unshift("mouse")
// shift removes the first one
animals.shift()
// push adds to the end
animals.push("Kitten")
// pop removes the last one
animals.pop()


// functions
// A way to group functionality
// A way to reuse code
// A function can be used as a property on an object

// ES5 function declaration
function areaOfACircle(radius){
    console.log("Inside the function")
    return Math.PI * radius * radius;
}
function add(x,y){
 return x + y;
}
function noReturn(){

}

// ES6 function declaration
let subtract = (x,y)=>{
    return function(){

    };
}
console.log(subtract(5,3))
//console.log(noReturn())

//console.log(add(1,2))
//console.log(areaOfACircle(5))

// Functions in JS are first class citizens/values
// You can assign them to variables
// You can pass them as arguments to other functions
// You can return them from functions
let secondName = "Ian"
function sayHello(func){
    console.log(`Hello ${name}`)
}





// What is a primitve value?
// A primitive value is a value that is not an object and has no methods.

// Numbers
// Numbers are just numbers. They can be positive or negative and can be whole numbers or decimals. They can also be written in scientific notation.


// Strings
// Strings are a sequence of characters. They can be written with single or double quotes. They can also be written with backticks. Backticks allow you to write strings across multiple lines and also allows you to use string interpolation. String interpolation allows you to use variables inside of strings.

// Booleans
// Booleans are either true or false. They are used to represent logical values.

// Null
// Null is a special value that represents the absence of a value. It is not the same as undefined.

// Undefined
// Undefined is a special value that represents the absence of a value. It is not the same as null.


// Selecting elements in the DOM:

// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll


