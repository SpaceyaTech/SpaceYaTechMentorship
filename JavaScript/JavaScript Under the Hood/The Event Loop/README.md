# The Event and Asynchronous JavaScript

Javascript is executed on a single thread. Meaning everything is run line by line. From top to bottom. But what if one of the operations running takes a long time to execute.What happens to the code that is supposed to run after the long running process.

This is where `The Event Loop and Web APIs come in`. They handle any long running process that could potentially block the main thread. 

APIs like `setTimeout(),AJAX, fetch` are all apis that use the event loop to execute long running processes.


These long running processes are put into what is called the `Task Queue`. A queue is a FIFO data structure that is used to que the different callback functions.

So what happens is if the call stack is empty and the the task queue has callback to execute, it will take the first function and put that in the callstack to be executed. Once this is done, it will pick the next function in the queue and execute that as well.



Let's look at an example of asynchronous Javascript in action.

```js
setTimeout(()=>{
 console.log("I will be put in the queue until the call stack is empty even though I wait 0 milliseconds")
})
console.log("I will log before the set timeout. I'm not placed in the task queue")

```

The code above is a perfect illustration of how asynchronous code works.

When we don't have any aync code to run, the event loop has nothing to do but loop and wait for something to come throught the pipeline.



You callback functions are placed in the `callback queue`. Before the introduction of promises in JavaScript, callbacks were used to run async operations. 

Callbacks are processed in the callback queue also know as the task queue.

Promises are processed in the Microtask queue. The microtask queue has a higher priority than the Task Queue. This is why promises get executed before traditional timer function that use the callback pattern.

