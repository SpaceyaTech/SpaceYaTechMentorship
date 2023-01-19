# Prototypes and Inheritance
 Every object that is created in JavaScript has a Prototype. A prototype is an object itself. All objects inherit their methods and properties from their prototype

When we create objects using the object literal syntax, we are inheriting from Object.prototype

When we create objects using constructors, the constructors are themselves the prototypes but they also inherit from Object.prototype

Let's look at a few examples

```js

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}


const mike = new Person('Mike','Smith');
const jake = new Person('Jake','Smith');

```


We know for a fact that every new person that we create will need to have a firstName and lastName property as these will change depending on the person. The sayHello function however will not. It will always be the same in terms of functionality. We will always take the firstName and lastName and say hello. So we can put this method in the prototype object.


```js

Person.prototype.sayHello = function(){
    return `Hello ${this.firstName} ${this.lastName}`;
}

```
The `sayHello` method is will now be part of the prototype and not one of the properties of the object. We can still access it in our object because our object will inherit from the prototype



## Prototype inheritance

```js

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;  
}

Person.prototype.sayHello = function(){
     return `Hello ${this.firstName} ${this.lastName}`
}


const jake = new Person('Jake','Doe');


```


Now let's create a Student Constructor


```js

function Student(firstName, lastName,admissionNumber){
    Person.call(this,firstName,lastName)
    this.admissionNumber = admissionNumber;
}

```


We can now use the Person constructor to set the firsName and the lastName properties since the properties are the same then use the Student constructor to set the admissionNumber propery 


