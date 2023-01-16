//console.log("Hello")

let billInformation = {
    billAmount: 2000,
    tipPercentage: 0.5,
    numberOfPeople: 2,
    calculateTipAmount: function(){
        // Scope function
        return (this.billAmount * this.tipPercentage) / this.numberOfPeople
    }
}

function anotherFun(){
    return this
}


anotherFun()

console.log(billInformation.calculateTipAmount())


const age = '44';
age.toUpperCase()


class Animal

  {
    constructor(){
      this.tail = true
    }   
    speak() {  
      console.log("Animals have different sounds"); 
    }
     ears(){
        console.log("All animals have ears");
     }  
  }


// const cat = new Animal();
// cat.speak()

class Cat extends Animal
  {  
speak(){
console.log("Cat says Meow Meow");}
}
  

const mittens = new Cat()
mittens.speak()

console.log(mittens)  

// We are creating a new class and inheriting from the animal class
class Dog extends Animal{
speak(){
    console.log('Dog says Woof')
}
}

const bruno = new Dog()
console.log(bruno)


class BullDog extends Dog{

}

const ghost = new BullDog()
console.log(ghost)


//alert("Hi")

