# Language JavaScript

## Design Patterns

- Module
  - AMD frontend design, CommonJS node
- OO Design
  - MVC
  - Singleton
  - Prototype
    > // Use Object.create to instantiate a new car
    > var yourCar = Object.create( myCar );
  - Observer - subject, observer
  - Mixin - class offer inheritble by sub-class for re-use
    > \_.extend(Car.prototype, myMixins)
  - Decorating Constructor
    > truck.setColor = (color) => { this.color = color; } // decorating with new function
  - Constructor - new Object()
  - Command Pattern
    > encapsulate by self invocating
- React Design
  - composition
  - lazy init

### Data-types

- What are some of the data-types in JavaScript? (1)
  - What are some of the primitive data types? **(Boolean, Null, Undefined, String, Symbol, Number)**

### Mutable v Immutable

- Explain the difference between mutable and immutable objects. (1)
  - What are some examples of an **immutable** object? **(String, Number, null, undefined, Boolean)**
  - How can you achieve immutability? (Object.freeze, Arrays can freeze because inherit from Object)

### Hoisting

- What is hoisting?
  - **(allows variables to be initialized before declared)**
  - **(moves declarations to top)**
  - What are some examples of things that are hoisted.
  - **(var is declared and initialized during hoisting. let and const are only declared during hoisting, not initialized)**

### Var, Let, Const

- What is the difference between var, let, const?
  - **(var is global or function scoped. let and const are block scoped. hoisted to top of their scope.)**

### Scoping and This

- this depends on context of who is calling

- What is Block scope vs Function Scope?
  - **(Block scope is within curly brackets)**
  - **(Global scope)**
- What is Lexical scope?
  - **(inside function you access outer scope variables)**

### 'use strict'

- What is 'use strict' mode?
  - **(helps ensure more 'secure' code. cannot use undelcared variables)**
  - forces explicit in referencing global vars

### Null v Undefined

- What is the difference between Null vs Undefined?
  - **(both are primitives, and falsely; null is assigned and is typeOf Object; they are loosely equal but not strictly)**
- What is difference between "=\=" and "=\=\="?

  - **(comparison- loosley equal 1 == '1'. strictly equal 1 === 1)**

### Binding

- What is binding? Explain Function.prototype.bind

  - **(creates a new function and forces 'this')**
  - How could this be implemented?
    > var myButton = {
    > content: 'OK',
    > click() {
        console.log(this.content + ' clicked');
    }
    };
    > var looseClick = myButton.click;
    > looseClick(); // not bound, 'this' is not myButton - it is the globalThis
    > var boundClick = myButton.click.bind(myButton);
    > boundClick(); // bound, 'this' is myButton

- What is "call" vs "apply"?

  - **(both invoke a function with a given 'this' and agruments. Apply accepts array, Call accepts comma)**

### Object Literal

- What is an Object Literal, Intializing?
  - **(literal: const o = {})**
  - **(Object.create())**
  - **(new Object())**
    > // Constructor
    > function Car(make, model, year) {
    > this.make = make;
    > this.model = model;
    > this.year = year;
    > }

### Inheritance and Prototype

- What is '\_\_proto\_\_' vs 'prototype'?

  - native methods, Array.prototype

    > String.prototype.repeatify =String.prototype.repeatify || function repeatify(i) { if (!i) {return this.toString()}; let r = ''; for(var j = 0; j < i; j++) {r = r+this;} return r;}

  - **(prototype is a property of a Function object. It is the prototype of objects constructed by that function. created at function declaration)**
  - **(\_\_proto\_\_ is an internal property of an object, pointing to its prototype.)**
    > // full prototype chain looks like:
    > {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null
    > // end is null, no prototype

- How to inherit?

  - **(Object.create() - inherits from )**

    > // p is an object that inherits from o
    > var p = Object.create(o);

  - **(new Object(o) - new instance, has ref to parent in prototype)**

### Event Loop

- What is the event loop? (2)

  - **(Javascript is single thread)**
  - **(responsible for executing the code)**
  - What are some ways event loop latencies can be tracked?
    - **(console log)**
      > const start = new Date()
      > setTimeout(() => {
      > const lag = new Date() - start
      > console.log(`Lag: \t${lag} ms`)
      > })

- What are some timer APIs in JavaScript? (setTimeout, setInterval, etc.) (1)

  - What can they be used for?
  - Can you explain with setTimeout(Function, Number) is doing? **(Placing a callback on the queue to be called from, not at, the set period)**
  - What is the primary difference between nextTick and setImmediate? **(nextTick queues at the head of the event queue)**
  - What about setTimeout(…, 0)? **(uses the callback queue instead of the IO queue)**

### Arguments

- What is "arguments object"?

  - **(array-like, stores all arguments, even if function declaration doesn't specify!)**
    > function addNumbers (num1, num2) { return num1 + num2; }
    > // what if we want to add n numbers?
    > addNumbers(addNumbers(1, 2), addNumbers(3, 4))

  > function addNumbers() {
  > const args = Array.prototype.slice.call(arguments);
  > return args.reduce((acc, n) => acc + n);
  > }
  > addNumbers(1, 2, 3, 4, 5);

### Slice

- What is Array.prototype.slice.call(arguments) doing?

  - changes an array-like object to an actual array
  - array-like objects do not have .slice
  - .call calls a function with a provided context, allowing us to manually set the this value of the function being invoked

- How do you reverse a String?

  - **(''test'.split('').reverse().join(''))**

### Currying and Closure

- What is currying and closure?

  - **(currying- returns function, reduce number of parameters, specialized function)**
  - **(closure- allows inner scope, private variables)**
  - **(example: use for onClick, overloading functions)**

### Modules: AMD v CommonJS

- What is the difference between AMD (Asnc Mod Def) and CommonJS?
  - **(CommonJS- Node, const, require, module.exports)**
  - **(AMD- RequireJS, ES6 import, from, export)**

### Polyfill

- What is compiling and polyfilling? And, when do you do one verses the other?

  - **(Babel [compiler, syntax tranform] ES6 => ES5 supported by browser)**
  - **(Polyfill [enhancements] new features/functionality to browser - global namespace properties, javascript primitives)**
    - Arrow Functions => compiled
    - Classes => compiled
    - Promises => polyfilled **(Promise to global namespace)**
    - Destructuring => compiled
    - Fetch => polyfilled
    - String.includes => polyfilled **(new properties to primitives)**
