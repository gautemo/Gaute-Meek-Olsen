---
title: Intro to TypeScript
date: 2019-06-28
tags: [TypeScript]
---

This is how I would have liked to be introduced to TypeScript; short and simple. So if you already know JavaScript, this article is for you.

## What is TypeScript

If you have developed a lot of JavaScript you probably have experienced how it can be a little cumbersome to use. In large codebases you will have to spend a lot of time reading code, to understand what it does and how your new code interacts with existing code. Also, errors do not occur until you actually run the code.

Therefore TypeScript was created, with the slogan “JavaScript that scales”. TypeScript code will be compiled to JavaScript and then used just like you are used to. TypeScript has the benefits of:

- **Instant type error detection**
- **More self-documenting code**
- **Better IDE experience**
- **Improves readability and easiness of understanding the code**

TypeScript is actually just JavaScript with types. So if you change the file-ending from .js to .ts, it should still be valid code (the type any will be used a lot). So don’t be scared of TypeScript, just start coding ordinary JavaScript and declare types where you feel it’s natural.

Another benefit which I like best. In JavaScript, there is a feature gap, new features in ES6 to ES9 are still not available in every browser or in a Node server. But in TypeScript, you can write the code with the newest features, such as classes and arrow functions and you can target for example ES3 and the code will be compiled into JavaScript with prototype and ordinary functions. (This is not completely true; if you use features such as Set and includes(), you will need to target a newer JavaScript version)

## Set Up

Download and open an IDE. I recommend Visual Studio Code, but TypeScript is supported in other as well, such as Sublime and Atom.

Install typescript on your computer through npm. Download Node, if you don’t have npm installed. In a terminal run this command.

```bash
npm install -g typescript
```

You can now compile .ts files manually with

```bash
tsc filename.ts
```

and you have created the .js file you want to use.

But the best way is to create a project folder and run the init command, like this

```bash
tsc --init
```

to set up your config file. Take a look at it and you will get a feel of what it does. This is where you can change the ECMAScript target version and where the compiled JavaScript files are placed.

Now create your files with the file ending .ts

To automatically compile these files on save:

```bash
tsc -w
```

If you use code bundlers such as webpack, the setup can be a little different.

## Code

Type annotations in TypeScript are ways to record the intended contract of the function or variable. This is done by : followed by the type.

```ts
let text: string = 'hello'
```

If you would assign a number to the variable text, that would give an error, because only strings are valid types for text.

Let’s walk through all the types available.

```ts
//boolean
let bool: boolean = true;

//number
let num: number = 123;

//string
let text: text = 'hello';

//Array
//(two options)
let arr1: string[] = [];
let arr2: Array<string> = [];

//tuple
let tuple: [number, string, boolean] = [12, 'yes' false];

//enum
enum Color {Red, Blue}
let color: Color = Color.Blue;

//any
let anything: any = 'whatever';

//void
function do(): void{
  console.log('no returns');
}

//null
let nothing1: null = null;

//undefined
let nothing2: undefined = undefined;

//never
//(types that never occurs. removing the while would give error)
const neverMethod = (): never => {
  while(true);
  console.log('never reached');
}

//object
let obj: object = {attr1: true, attr2: false};

//function
//(functions can be passed and returned)
function func(method: Function): Function{
  method();
  return method;
}

//interface
interface Options {
  size: number;
  readonly autodelete: boolean;
}
const opt: Options = {
  size: 1,
  autodelete: true
}
```

Note that in TypeScript types are inferred when assigning variables. This is because specifying the type every time is tedious. Therefore the variable thing is of type string.

```ts
let thing = 'hello'
thing = 1 //error
```

But what if we want a variable that can be both number and string? We could give it the type any, but a better approach is to specify multiple types.

```ts
let thing: string | number = 'hello'
thing = 1
```

Since variables are inferred and we don’t usually specify types when declaring variables. So when do we specify types? It is very useful for parameters and return types.

```ts
//this function must return a string,
// because of : string after the param parenthesis
function greet(name: string, age: number): string {
  return `Hi ${name} who is ${age} years.`
}
const msg = greet('Gaute', 27)

//this funciton can't return any values
function greet(name: string, age: number): void {
  console.log(`Hi ${name} who is ${age} years.`)
}
greet('Gaute', 27)
```

This way your future self and co-workers always know which types the function requires and what it will return.

Now TypeScript is making our greet method require two parameters every time. In JavaScript we could have passed zero or an infinite number of parameters. So TypeScript has the optional parameters, which can be used in methods, classes, and interfaces. If the parameter is left out, the variable will be undefined.

```ts
function greet(name: string, age?: number): string {
  let info = ''
  if (age) {
    info = `who is ${age} years.`
  }
  return `Hi ${name} ${info}`
}
//It's okay to don't pass age
const msg = greet('Gaute')

interface Dialog {
  size: number
  title?: string
}
//It's okay to don't add title
const window: Dialog = {
  size: 1,
}
```

## Conclusion

That’s the basic you need to know and maybe all you need to know for your projects.
