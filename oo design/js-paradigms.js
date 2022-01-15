// Javascript Paradigms
/*
    Object Oriented (OO) vs Functional

    OO =>           Prototypal Inheritance

    Functional =>   Higher-Order Functions (HOF)
                    Pure Functions
                    First-Class Functions = functions as variable, like expression of any type
                    Declartive
*/
/*
    Inheritance

    Class vs Prototype

    Class =         new User()

    Prototype =     Object.create()

*/

// DESIGN PATTERNS

// REVEALING MODULE PATTERN
/* 
  expose private/public methods
  IIF - immediately invoking function
  closure but returns Object Literal, not function
  => unable to test private functions
*/
var Exposer = (function () {
  var privateVariable = 10;

  var _privateMethod = function () {
    console.log("Inside a private method!");
    privateVariable++;
  };

  var methodToExpose = function () {
    console.log("This is a method I want to expose!");
  };

  var otherMethodIWantToExpose = function () {
    _privateMethod();
  };

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose
  };
})();

Exposer.first(); // Output: This is a method I want to expose!
Exposer.second(); // Output: Inside a private method!
Exposer.methodToExpose; // undefined

// OBSERVER DESIGN PATTERN
// example is MVC architecture  -   decouple view from model, and view updates when model changes

// PROTOTYPE DESIGN PATTERN
var TeslaModelS = function () {
  this.numWheels = 4;
  this.manufacturer = "Tesla";
  this.make = "Model S";
};
TeslaModelS.prototype.stop = function () {
  // Apply brake pads
  console.log("stop");
};

const t = new TeslaModelS();
console.log("Tesla: ", t.make);
t.stop();
