console.log(this) // this will be set to the window object


function whatIsThis(){
  return this
}

//Calling on the global scope
whatIsThis()

const whatIsThisObject = {
    propOne:'This is prop one',
    funcProp:whatIsThis
} 

console.log(whatIsThisObject.funcProp())

const sayingHello = function(){
    return `Hello ${this.firstName} ${this.lastName}`  
  }

const jake = {
    firstName:'Jake',
    lastName:'Smith',
    sayHello: sayingHello
}

console.log(sayingHello())
console.log(jake.sayHello())

// Setting our own this using call() and apply() functions

// call
// the call function takes in two arguments, the value of `this` and any arguments the function takes
// Let's invoke the sayingHello function on another object.

let pennyLittle ={
    firstName:'Penny',
    lastName:'Little'
}

console.log(sayingHello.call(pennyLittle))

// apply
// the apply function takes in two arguments, the value of `    this` and any arguments the function takes as an array
// Let's use the previous example but this time let's use apply instead of call.

let pennyDreadful ={
    firstName:'Penny',
    lastName:'Dreadful'
}

console.log(sayingHello.apply(pennyDreadful))



// Constructors

const jupiter = {
    terrestrial:false,
    gaseous:true,
    name:'Jupiter'
}
const earth = {
    terrestrial:true,
    gaseous:false,
    name:'Earth'
}

function Planet(name,terrestrial,gaseous){
 this.name = name
 this.terrestrial = terrestrial
 this.gaseous = gaseous
}



function Person(firstName,lastName,occupation,legs=2){
    this.firstName = firstName;
    this.legs = legs;
    this.lastName = lastName;
    this.occupation = occupation;
    this.speak = function(){
        return `${this.firstName} ${this.lastName} is speaking`
    }
}



// const earth_2 = new Planet('Earth',true,false)
// const mercury = new Planet('Mercury',true,false)
// // console.log(earth_2)
// console.log(mercury)
// const jake = new Person('Jake','Smith','Web Developer')
// console.log(jake.speak())

function Laptop(brand,color){
  this.brand = brand;
  this.color = color;
}


const hp = new Laptop('HP','silver');
console.log(hp)

function VSCodeWindow(window){
    this.window = window
}

function Calculator(firstNum,secondNum){
   this.firstNum = firstNum
   this.secondNum = secondNum
   this.add = function(){
    return this.firstNum + this.secondNum
   }
   this.subtract = function(){
     return this.firstNum - this.secondNum
   }
}



// const windowOne = new VSCodeWindow(true)
// const windowTwo = new VSCodeWindow(false)



// const maidenName = "Chris"
// const maidenName2 = new String("Chris")


// console.log(maidenName === maidenName2)



























