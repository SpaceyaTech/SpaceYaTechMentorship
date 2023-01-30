# The Callstack in JavaScript

Thread Of Execution
- JavaScript is a **single-threaded** language
- Single sequential flow of control
- JavaScript is a **synchronous language** with asynchronous capabilities
- A thread has a **call stack & memory**

A thread has a callstack and a memory heap.

The callstack keeps track of our functions and manages the execution context. At the bottom of our callstack is the global execution context that runs all our JavaScript code.

When a script calls a function, the interpretor adds it to the calls stack.
Any functions that are called by that function are added further up and run where their calls are reached.

When the stack takes up more space than it was assigned, a stack overflow error is thrown.



Code in JavaScript runs synchronously. The code below will run from top to bottom synchronously.


```js
console.log("I go first 🥇")
console.log("I go second 🥈")
console.log("I go third 🥉")

```
I go first is called first, the I go second is called then i go third. This will be executed in the global execution context. We have no functions of our own to call. Let's rewrite the functionality to now use functions


```js
function callerOne(){
    console.log("I go first 🥇")
}
function callerTwo(){
    console.log("I go second 🥈")
}
function callerThree(){
    console.log("I go third 🥉")
}
callerOne();
callerTwo();
callerThree();

```

This time our callstack will get populated with the different functions:

```js
callerThree()
callerTwo()
callerOne()
GEC()
```