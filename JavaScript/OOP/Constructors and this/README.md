# Constructors and the `this` keyword

## `this` keyword

Let's look at an example of calling `this` in our global scope

```js

console.log(this)  //window object

```
The value of `this` depends on how and where it was called. When we call this on our global scope, the value is set to the window object because there is no other object to the left of this.

Let's look at an example of calling `this` in our an object

```js
const planet = {
    terrestrial:true,
    name:'Earth',
    gaseous:false,
    whatIsThis:function(){
        console.log(this) // Planet Object
    }
}

```


For us to access the `whatIsThis` function, we need to first get the planet object, then get the `whatIsThis` property.



```js
 
console.log(planet.whatIsThis()) // Planet Object 

```

Try to figure out the value of `this`

```js

function whatIsThis() {
  console.log(this) 
}


const planet = {
    terrestrial:true,
    name:'Earth',
    gaseous:false,
    whatIsThis:function(){
        console.log(this) // Planet Object
    }
}


whatIsThis() // What is the value of `this`
planet.whatIsThis() // What is the value of this


```

## Setting our own `this` using `call()`, `apply()` and `bind()`


The call and apply are called on the function we want to invoke.

```js
function callMeMaybe(){
    return "So call me maybe"
}


// Normal invocation
callMeMaybe()

// Calling using the call() function
// The arguments are passed in as comma separated values
CallMeMaybe.call(window,arg1,arg2)


```

The call method will invoke the function in the scope of the first argument.


The apply method works the same. The only difference being how we pass in the arguments

```js
function callMeMaybe(){
    return "So call me maybe"
}


// Normal invocation
callMeMaybe()

// Calling using the apply() function
// The arguments are the same as an array of arguments
CallMeMaybe.apply(window,[arg1,arg2])


```

### So when should you choose one over the other.

The call method is limited in terms of arguments. it will always take the same number of arguments. This means you will need to know ahead of time how many arguments the function takes. This is now always the case. In this scenario the apply method would be a better option as you can simply spread out the arguments.




## What is a constructor

A constructor is a function that constructs or creates objects. We've been defining objects using the object literal syntax. 

```js
const jupiter = {
    terrestrial: false,
    gaseous: true,
    name:'Jupiter',
    description:function(){
        if(this.terrestrial){
          return `Planet ${this.name} is a terrestrial planet`
        }else if(this.gaseous){
            return `Planet ${this.name} is a gaseous planet`
        }else{
            return `Planet ${this.name} is neither a gaseous nor a gaseous terrestrial planet`
        }
    }

}

```

You can see how this can get tedious if we try to create every planet using the object literal notation. What we can do instead is create a constructor functiin that will be responsible for creating the objects for us.


```js

function Planets(terrestrial,gaseous,name){
  this.terrestrial = terrrestrial;
  this.gaseous = gaseous;
  this.name = name;
  this.description = function(){
    if(this.terrestrial){
          return `Planet ${this.name} is a terrestrial planet`
        }else if(this.gaseous){
            return `Planet ${this.name} is a gaseous planet`
        }else{
            return `Planet ${this.name} is neither a gaseous nor a gaseous terrestrial planet`
        }
  }
}

```


We can now use the `Planet` constructor to create new planet objects.


```js

const jupiter = new Planet(false,true,"Jupiter")


```
