# Using Classes and Subclasses to create objects

Classes were introduced in JavaScript with the release of ES6 in 2015. Classes are syntactic sugar. Basically an easier way to create objects.


```js

class Person {
    constructor(firstName,lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }
    sayHello(){
     return `Hello ${this.firstName}!`;   
    }
}


```

As you can see when we are defining classes in JS, we need to use the `constructor` function to instantiate the object. 




## Extending classes

```js

class Person{
    constructor(firstName,lastName){
     this.firstName = firstName
     this.lastName = lastName
    }
    greeting(){
        return `Hello ${this.firstName} ${this.lastName}!`
    }
}

class Customer extends Person {
    constructor(firstName,lastName,phone,membership){
    super(firstName,lastName)
    this.membership = membership;
    this.phone = phone;
    }
}

```
We use the `super` function to extend functionality from one class to another. The `super` function will call the Person constructor and use it to add the necessary properties to the Customer constructor.


When we use the super function, we inherit from the Person class. So any methods that are available in the Person class, are also available in the Customer class.