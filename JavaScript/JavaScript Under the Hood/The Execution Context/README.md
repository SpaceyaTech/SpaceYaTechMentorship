# The Execution Context

Whenever we run our JavaScript code an environment for executing that code is created. That environment is called the global execution context.

There two types of execution context:

- The Global Execution Context
- Function Execution Context

The execution context is made up of two phases:

- Creation Phase
  - Stores functions and variables in the global execution context and sets the variables to undefined.
  - Create the `this` object and binds it to the global object which is the window object in the browser


- Execution Phase
   - Execute the code line by line
   - Create a new executin context for every function call.


Let and const are also hoisted but they are not available to you in the window object. They are put in a TDZ(Temporal Dead Zone)

