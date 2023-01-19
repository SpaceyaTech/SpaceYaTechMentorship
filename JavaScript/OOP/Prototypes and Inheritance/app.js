
// When you use literal notation, the prototype is set to Object.prototype
// const jake = {
//   firstName:'Jake'
// }
// Our prototype is set to Object.prototype
//console.log(jake)



class Person{
  constructor(firstName,lastName){
   this.firstName = firstName
   this.lastName = lastName
  }
}

class Customer extends Person{
  constructor(firstName,lastName,membership){
    super(firstName,lastName)
    this.membership = membership
  }
}


const customer_one = new Customer("Paul",'Wayne','Premium')


console.log(customer_one)




// const jane = new Person("Jane","Doe")
// console.log(jane.hasOwnProperty("firstName"))

// function Customer(firstName,lastName){
//   this.firstName = firstName
//   this.lastName = lastName
// }

// const mike = new Customer("Mike","Smith");
// // Our prototype is Customer.prototype
// console.log(mike)





























// // What are prototypes and what are they used for?
// // Let's start of by creating a constructor

// function Person(firstName, lastName,age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
  
  
//   const mike = new Person('Mike','Smith',12);
//   const jake = new Person('Jake','Smith',34);

// //   console.log(mike)
// //   console.log(jake)


//   // We know for a fact that the sayHello function will always be the same. We will always take the firstName and the lastName  and say hello

//   Person.prototype.sayHello = function(){
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }
//   Person.prototype.canDrive = function(){
//     if(this.age >= 18){
//       return "Hoorah!! you're old enough to drive"
//     }else{
//         return "You're too young to drive"
//     }
//   }

//   Person.prototype.changeAge = function(newAge){
//       this.age = newAge;
//   }


//   console.log(mike.canDrive())
//   mike.changeAge(20)
//   console.log(mike.canDrive())

//   console.log(mike.hasOwnProperty('sayHello'))



// // Now let's look at prototype inheritance

// function Student(firstName,lastName,age,admissionNumber){

//   Person.call(this,firstName,lastName,age);
//   this.admissionNumber = admissionNumber;

// }

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.hasGraduated = function(){
//      return "Has graduated"
// }

// Student.prototype.constructor = Student;

// const fatma = new Student('Fatma','Rahman',23,2323);
// console.log(fatma.canDrive())
// console.log(fatma)