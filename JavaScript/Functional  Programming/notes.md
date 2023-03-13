# Notes from Anjana Vakils talk on functional programming

Functional programming is a programming paradigm. Functions are king.
It's a style of organizing your code.
It's a mindset.

> In functional programming you want to d everything in functions

Let's look at an example of non-functional code:

```js
let firstName = "Ian"
let greeting = "Hi I'm"

console.log(`${greeting} ${firstName}`)

```

This is an example of `imperative code`. Do this first then do the next thing on the line and so fourth.


We could rewrite this to use a functional approach instead:


```js
const sayHello = (name) =>{
  return `Hi I'm ${name}`
}

```
We can always tell what output would be depending on the input. This is a pure function. It doesn't do anything outside of the function. It's only job is to take input and return output that does not affect any other part of our app.


A `side effect` is anything that a function might do, that isn't using the input to compute the output. For example printing something on the console is not returning an output. That's doing something else.


Using a global variable to do something in the function is another example of a side-effect. The output in this case is dependant on the global variable. So it does not qualify as a pure function.


A key pillar of functional programming is trying to make sure that your functions are as pure as possible.
Another key pillar of functional programming is using higher order functions



```js
const makeMeAVerb = (verb)=>{
      return (verb)=>{
           return `${verb}ing`
      }
}

const presentTense = makeMeAVerb("run")
console.log(presentTense())
```
In functional programming we should use higher order functions to iterate over elements.


Let's look at an example

```js
const twoByN = (arr) =>{
  return arr.map(el=>el*2)
}

```

This piece of code is functional programming because:

1. We are not mutating the original array
2. Our input will always give the same output. 

So our piece of code is not mutating anything and we also don't have side effects




## Higher Order Function (HOF)
A higher order funtion in JavaScript is a function that either takes in another function as an argument and/or returns a function

The functions that is passed in to our `HOF` is called a `callback function`


Let's look at an example. We want to loop over an array and return another array that indicated whether the elements are even or odd.

```js
const evenOrOdd = (arr) =>{
  return arr.map(element=> element % 2 === 0 ? "Even": "Odd")
}
console.log(evenOrOdd([1,2,3,4,5]))


```

There are some instances where copying the entire array is an expensive operation. Especially after your data becomes bigger. We can solve this problem using `structural sharing`


