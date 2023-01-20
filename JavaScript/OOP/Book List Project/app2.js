// Constructors

function Person(firstName,lastName){
 this.firstName =firstName
 this.lastName =lastName;
}

Person.prototype.talk = function(){
    return `${this.firstName} ${this.lastName} is talking`
}

function Animal(name){
 this.name = name;
}

const jake = new Person("Jake","Smith");

const chris = new Person("Chris","Evans");
// Person.prototype
console.log(jake.hasOwnProperty("name"))
console.log(chris)


const dog = new Animal("Dog")
const cat = new Animal("Cat")

const zebra = {
    name: "Zebra",
}
//console.log(zebra)

// Animal.prototype
//console.log(dog)
//console.log(cat)
const mike = {
    firstName:"Mike"
}
// Object.prototype
//console.log(mike)

