// Creating classes
// ES6
class Person {
    constructor(firstName,lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }
     sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
     } 
} 


class Student extends Person{
   
}


class Customer extends Person {
  constructor(firstName,lastName,phone,membership){
  super(firstName,lastName)
  this.membership = membership;
  this.phone = phone;
  }
}







const customer_one  = new Customer("Mike","Smith",2223,"Premium");


console.log(customer_one);

function modulo(x,y){
   return x%y
}
console.log(modulo(3,7));











// ES5 syntax 

// function Customer(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.sayHello = function(){

//   }
// }


// const janeDoe = new Person('Jane','Doe');

// const jakeDoe = {
//     firstName:'Jake',
//     lastName: 'Doe'
// }

// console.log(janeDoe.hasOwnProperty('firstName'))

// Object.prototype
//console.log(jakeDoe.hasOwnProperty('isAlive'))