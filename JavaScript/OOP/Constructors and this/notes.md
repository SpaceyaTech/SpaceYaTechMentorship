# Constructors and the 'this' keyword

We can define objects using the object literal syntax anytime we want to create a new object.

```js

const planet = {
    name:'Jupiter',
    terrestrial: false
    gaseous: false
}

```

But what if we wanted different objects that all have the same properties. Instead writing out eahc individual planet as its own object using object literals, we can instead use a `constructor` that will create objects with the same shapes.


```js

function Planet(name,terrestrial,gaseous){
  this.name = name;
  this.terrestrial = terrrestrial;
  this.gaseous = gaseous;
}

```

We can now use the `constructor` to create objects

```js

const jupiter = new Planet('Jupiter',false,true);

console.log(jupiter)

```


## Built-in Constructors

### Strings

```js
const mike = new String('Mike')

```

### Numbers

```js

const jake = new Number(2)


```

### Boolean

```js
const bool = new Boolean(true)

```

### functions 

```js

const myFun = new Function('x',y,'return 1+1')

```


### Objects

```js
const person = new Object({})


```

### Arrays

```js

const myArr = new Array(1,2,3)

```




### Prototypes


Every object in JavaScript has a prototype. A prototype itself is an object. Objects inherit from their prototype.

When we are dealing with object literals, we inherit from Object.prototype

When we are dealing with objects that have been created from constructor e.g Human we will inherit from  Human.prototype




### Udemy OOP course

We can create objects in two ways:
- We can either use object literal syntax

```js

const dog = {

}

```

- or we can use the `Object()` constructor

```js

const dog = new Object()

```



### this keyword

The value of this in a function or an object, depends on where it was called: 


```js

function Cat(name) {
 this.name = name;
 this.sayName = function () {
   console.log(`Meow! My name is ${this.name}`);
 };
}

```
When we create an object using a constructor, the value of this is set to the newly create object.










