// The task queue is where callbacks are placed
// so even if a setTimeout runs after 0 milliseconds, it will still run after anything that was executed directly in the callstack

// setTimeout(()=>{
//     console.log("Called after x seconds")
//   },2000)
//   setTimeout(()=>{
//     console.log("Called after x seconds")
//   },2000)

//   for(let i = 0;i < 100; i++){
//     console.log(i)
//   }

// setTimeout(function a() {
//     console.log("Called A")
// }, 1000);

// setTimeout(function b() {
//     console.log("Called B")
// }, 500);

// setTimeout(function c() {
//     console.log("Called C")
// }, 0);
// // setImmediate(()=>console.log("Called Immediately"))
// document.querySelector('test').addEventListener('click',()=>{
    
// })

// function d() {}

// d();











