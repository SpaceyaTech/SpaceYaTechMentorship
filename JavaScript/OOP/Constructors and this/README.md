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