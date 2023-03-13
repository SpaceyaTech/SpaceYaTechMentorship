# What is Typescript
Typescript is an open source language and is superset of JavaScript.

## Pros of Using Typescript
- More Robust
- Easily spot bigs
- Predictability
- Popular

## Cons of Using Typescript
- More code to write
- More to learn
- Required Compilation
- Not true static typing


Typescript allows us to catch bugs before we compile our code. 


JavaScript is a dynamically typed language. This means that the type of value assigned to a variable is determined at runtime by the compiler. We don't have to explicitly type out the type in our code.

This has some benefits for example less code for the developer to write since the compiler will do the type annotation for us. 


However there are instances where this behavior is not welcome. Most of the time we find out our code has bugs during runtime when the code is in production. 

Typescript files use the `ts` extension. Typescript is what is referred to as a superset of JS. So Typescript is still JavaScript but with some extra feature. 

The browser and nodejs do not understand what typescript is. 

The following code would throw an error in both nodejs and the browser

```ts
const firstName:string = "Ian"
// node app.ts
```
This is because node does not understand typescript. Only JavaScript. 

This is why we have the Typescript compiler. The typescript compiler takes your Typescript code and compiles it down to regular JavaScript.

## Installing the Typescript compiler

```bash
npm i -g typescript
```

Confirm we installed the typescript compiler by running  `tsc -v` in the terminal. 

```bash
tsc -v
Version 4.6.3
```

## Setting up a config file

We can set up a configuration file using `tsc --init`. this will create a tsconfig file.


## type aliases

```ts
type  myObj = {

}

interface myObj{

}

```
