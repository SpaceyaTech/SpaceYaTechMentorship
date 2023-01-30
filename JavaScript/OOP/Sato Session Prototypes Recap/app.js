// Create a machine object
// With a property motors = 4
// const machine = {
//     motors:4
// }


// Create a robot object
// With a property friendly = true
// const robot = {
//     friendly: true
// }


// create a robby object
// const robby = {

// }


// make machine the prototype of robot
// Object.setPrototypeOf(robot,machine)
//console.log(robot)
// Make robot the prototype of robby
// Object.setPrototypeOf(robby,robot)
// console.log(robby)

// What is robby.friendly
//console.log(robby.friendly)

// -> What is `robby.motors`?
//console.log(robby)






// Inheritance

// -> Let's define three objects: 'machine' 'vehicle' and 'robot'
// let machine = {}
// let vehicle = {}
// let robot = {}

// -> Make machine the prototype of vehicle
//Object.setPrototypeOf(vehicle, machine)

// -> Make machine the prototype of robot
//Object.setPrototypeOf(robot, machine)

// -> What is `vehicle.motors`?
//console.log(vehicle.motors)

// -> What is `robot.motors`?
//console.log(robot.motors)

// -> Define a 'motors' property on machine, set this to 4
//machine.motors = 4;


// -> What is `vehicle.motors` now?
//console.log(vehicle.motors)

// -> What is `robot.motors`?
//console.log(robot.motors)


// Property Assignment


// -> Define three objects: 'machine', 'robot' and 'vehicle'
//    In the definition of machine add a property 'motors' set to null.

let machine = {
  motors: null,
}
let robot = {

}
let vehicle = {

}
  
  // -> Let's make machine the prototype of robot and vehicle
//  Object.setPrototypeOf(robot,machine)
  
//  Object.setPrototypeOf(robot,vehicle)
  // -> What are `machine.motors`, `robot.motors` and `vehicle.motors`?
//   console.log(machine.motors)
//   console.log(robot.motors)
//   console.log(vehicle.motors)
  
  // -> Set `robot.motors` to 4 by direct assignment
//   robot.motors = 4
  
  // -> What are `machine.motors`, `robot.motors` and `vehicle.motors` now?

//  console.log(robot) 
//   console.log(machine.motors)
//   console.log(robot.motors)
//   console.log(vehicle.motors)



// const machine = {
//   materials:[],
//   biddingPrice:{
//     price:false
//   }
// }

// const vehicle = {

// }

// const robot = {

// }

// Let's set the prototype of vehicle to machine
// Let's set the prototype of robot to machine
// Object.setPrototypeOf(vehicle,machine)
// Object.setPrototypeOf(robot,machine)


// console.log(vehicle)
// console.log(robot)

// vehicle.materials = [...vehicle.materials,"metal"]
// console.log(vehicle.materials)

// What is the value of robot.material
// console.log(robot.materials)

robot.biddingPrice.price = true
console.log(robot.biddingPrice)



console.log(vehicle.biddingPrice)





