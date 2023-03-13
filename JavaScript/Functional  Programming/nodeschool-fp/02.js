function repeat(operation, num) {
    // SOLUTION GOES HERE
    // base case
    if(num <= 0){
        return
    }
    operation()
    repeat(operation,--num)
  }

// const callMeMaybe = () =>{
//     console.log(`You're calling me`)
// }

// repeat(callMeMaybe,6) 


// Do not remove the line below
module.exports = repeat