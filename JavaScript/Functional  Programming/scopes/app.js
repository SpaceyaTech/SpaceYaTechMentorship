// Global Scope
// let global = "I am global";
// console.log(global)

// {
//  const myBlockedVar = "Block Scoped" 
// }
// //console.log(myBlockedVar)

// function getVar(){
//   let functionScoped = "I am function scoped"
//   console.log(functionScoped)
// }
// getVar()

// function getGlobal(){
//     // Function Scope
//     let functionScoped = "Scoped in the function"

//     return function scoped(){
//     let scopedInner ="Scopped inner"
//       console.log(functionScoped)

//       return function scopedTwo(){
//         console.log(scopedInner)
//       }
//     }
// }

// //console.log(blockScoped)

// getGlobal()()()

// Let's visualize scope using matryoshka doll

function parentMatroyshka() {
  let parentMatrosh = "🪆";
  console.log(parentMatrosh);
  return function childMatroyshka() {
    let childMatrosh = `${parentMatrosh}🪆`;
    console.log(childMatrosh);

    return function grandChildMatrosh() {
      let grandChildMatrosh = `${childMatrosh}🪆`;
      console.log(grandChildMatrosh);

      return function greatGrandChildMatrosh() {
        console.log(global)
        let greatGrandChildMatrosh = `${grandChildMatrosh}🪆`;
        console.log(greatGrandChildMatrosh);
      };
    };
  }
}

 parentMatroyshka()()()();

















 function doubler(number){
    let num = 2
    return function closedOver(){
        return number * num
    }
}

function tripler() {
    let num = 3;
    return function(number){

       return number * num
    }
}
const triple = tripler()
const tripled = triple(10)
//console.log(tripled)

const double = doubler(4)
//console.log(double())
// const doubleTen =double(10)
// const doubleFive = double(5)
// const doubleFour = double(4)

// console.log(doubleFive)
// console.log(doubleTen)
// console.log(doubleFour)
// console.log(double(10))
// const doubleTen = double(10)
// console.log(doubleTen)



function headerComponent(){
    return "Returning JSX"
}


// function App(){  
//   headerComponent()
// }
// const multiply = (number)=>number*2

// const numsArr = [1,2,3,4]
// const doubledArr = numsArr.map(multiply)
// console.log(doubledArr)

















