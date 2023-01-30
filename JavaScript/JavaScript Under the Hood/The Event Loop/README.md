# The Event and Asynchronous JavaScript

Javascript is executed on a single thread. Meaning everything is run line by line. From top to bottom. But what if one of the operations running takes a long time to execute.What happens to the code that is supposed to run after the long running process.

This is where `The Event Loop and Web APIs come in`. The handle any long running process that could potentially block the main thread. 

APIs like `setTimeout(),AJAX, fetch` are all apis that use the event loop to execute long running processes.


These long running processes are put into what is called the `Task Queue`. A queue is a FIFO data structure that is used to que the different callback functions.

So what happens is if the call stack is empty and the the task queue has callback to execute, it will take the first function and put that in the callstack to be executed. Once this is done, it will pick the next function in the queue and execute that as well.
