# Object-Oriented Programming In JavaScript

## What is Object-Oriented Programming

Object Oriented Programming is not a programming language, or a framework, but a way of thinking about code. It's what is know as a programming paradigm. When we write our code in OOP style, what we simply mean is we've composed our application into objects.

Chances are when you first start writing code, you'll be using a procedural paradigm. Your code will be decoupled, meaning not inter-related.

Let's look an example from our previous Frontend Challenge
The formula for calculating tip amount is:

```js
// Formula for calculating tip amount
// (billAmount * tipPercentage) / numberOfPeople;

// Procedural

let billAmount = 2000;
let tipPercentage = 0.5;
let numberOfPeople = 2;

function calculateTipAmount(billAmount, tipPercentage,numberOfPeople){
  return (billAmount * tipPercentage) / numberOfPeople;
}
// Invoke the function

calculateTipAmount(billAmount, tipPercentage, numberOfPeople)

let person = {
    firstName:'Ian',
    occupation:'Web Developer'
}

// Step 1: Create an object that will hold the interelated data

let billInformation = {
    billAmount: 2000,
    tipPercentage: 0.5,
    numberOfPeople: 2,
    calculateTipAmount: function(){
        return (billAmount * tipPercentage) / numberOfPeople
    }
}







```

## Other programming paradigms

- Functional programming
- Imperative programming
- Declarative programming


## The 4 pillars of OOP

- Encapsulation
- Abstraction 
- Inheritance
- Polymorphism


## Encapsulation

When writing code in OOP style, we group interalated pieced of code together instead of having isolated pieces of data. This has of making the code easier to maintain as well as degub.
This is what we refer when we talk about encapsulation. Think about the DOM. Everything that has a relationship with the document object, is defined within it. This is why everytime we want to interact with an element on the DOM,our starting point is always the document object. 

Let's rewrite our inital example to show what we mean by encapsulation.

```js

let billInformation = {
    billAmount:2000,
    tipPercentage:0.5,
    numberOfPeople: 2,
    calculateTipPercentage: function(){
        return (this.billAmount * this.tipPercentage) / this.numberOfPeople;
    }
}

```


## Abstraction

The ability to hide complexity from the end user is what is referred to as abstraction. Think about our example above. We don't need to know how calculateTipPercentage works, we only need to know of it. The formula has been abstracted away for us. All we need to do is call the method.

Let's look at a method like `toUpperCase()`
```js

'ian'.toUpperCase()

```

We don't know how the functio works internally, but we know the function exists.



## Inheritance

Inheritance allows us to eliminate redundant code duplication

Using our previous example for capitalization, we don't need to rewrite the `toUpperCase()` method evertime we want to use it. It's been defined in the String object then it gets inherited by every piece of code that used the String object.



## Polymorphism
The term Polymorphism is derived from the word “Polymorph,” where “Poly” means “Many” and “Morph” means “Transforming one form into another“.


```js

class Animal
  {
    tail:true,  
    speak() {  
      console.log("Animals have different sounds"); }
     ears(){
        console.log("All animals have ears");
     }   
  }

class Cat extends Animal
  {  
speak(){
console.log("Cat says Meow Meow");}
  }  
class Dog extends Animal

```