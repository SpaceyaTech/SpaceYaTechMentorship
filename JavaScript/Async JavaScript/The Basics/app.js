// JavaScript is a single threaded language,
// This means that JavaScript can only create a single call stack
// What is a call stack.

// callbacks


// console.log("Step 1");

// for(let i = 0; i <= 9; i++){
//   console.log(i)
// }

// console.log("Step 2")


// // document.querySelector('input').addEventListener('click',()=>{
// //   console.log("Process some long running operation")
// // })

// setTimeout(()=>{
//     console.log("I was called after x seconds")
// },0)


// console.log("Step 3")
// console.log("step 4")


const marvelOrDC = (answer) =>{
    
    // Let's start by capitalizing the user input 
    answer = answer.toUpperCase()
    // This is how we return a promise
    return new Promise((resolve,reject)=>{ 
    if(answer === 'MARVEL'){
     resolve("You are a Marvel comics fan")
    }else if(answer === "DC"){
    resolve("You are a DC comics fan")
    }
      // If the user inputs anything other than Marvel or DC the promise will be rejected
      else{
      reject("You need to either pick marvel or DC")
      }
    })
  }














// const pickAColor = (color) =>{
//    return new Promise((resolve,reject)=>{
//       if(color === 'red'){
//         resolve('You picked a red color')
//       }else if(color === 'blue'){
//         resolve("You picked a blue color")
//       }else{
//         reject("You need to either pick a red or blue color")
//       }
//    })
// }
// pickAColor("red")
// .then((data)=>{
//    console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })




const canDrive = (age) =>{
  return new Promise((resolve,reject)=>{
       if(age >= 18){
        resolve("You are allowed to drive")
       }
       else if(age > 10){
         resolve("You are still not allowed to drive. Tough luck")
       }
       else{
        reject("You are not allowed to drive")
       }
  })
}

canDrive()
.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err)
})
//console.log(canDrive(18))












































// marvelOrDC("")
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


const handlePromise = async(answer) =>{
    try {
      const result = await marvelOrDC(answer)
      console.log(result)
    } catch (error) {
        console.log(error)
    }
  }


//handlePromise("")





