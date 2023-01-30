# ES6 & Beyond

ES6 is the version of JavaScript that was introduced in 2015. It was a major release of the ECMAScript language also know as JavaScript. Here are some of the features that came with ES6.

- let and const Keywords
- Arrow Functions
- Multi-line Strings
- Default Parameters
- Template Literals
- Destructuring Assignment
- Enhanced Object Literals
- Promises
- Classes
- Module

## `Var`, `Let`, `Const`

### Var

The scope of var is global when it is declared outside a function. This means that any variable that is declared outside a function block is available for use in the whole window

var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function



```js
 var iamGlobal = "This is global variable."

 function myFun(){
    var iamLocal = "This function scoped and is only accessible within the function"
 }


```
The code snippet above will redeclare the value of iamGlobal

