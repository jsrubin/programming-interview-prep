# Phone Screen Questions to Gauge Level

These are questions that are about JavaScript concepts where junior engineers should know the basics but senior engineers should be able to go more in depth.

## Tell me what you know about prototypical inheritance

**Basic answer:** Inheritance in JS where one object extends another WORKING INSTANCE object. This is the difference between Classical and Prototypical. Classical inheritance uses parent as a blue print to create a new class. JS links to a working object, which can be mutated at runtime. 

**More advanced answer:** Talk about the prototype chain, everything goes to Object which is the only thing that has null as its prototype.

## Tell me what you know about closures

Basic answer: used to enclose scope

Advanced answer: use case examples, returning an object api instead of inner properties

## What can you tell me about type coercion in JavaScript
Basic answer: JavaScript will change one type into another when certain operations are performed.

Advanced answer: Implicit vs explicit coercion, only 3 types (to string, to Boolean, to number), triggered by operator (special case, + coerces to string before number)

## What can you tell me about var x = 1; vs window.x = 1;?
The first is a variable assignment. The variable will be hoisted, but the assignment will happen in line. Window.x is a property assignment.

Advanced: talk about flags like deletable, enumerable etc.

## Tell me what you know about event loop?

Basic answer: how JavaScript can run asynchronous apis like setTimeout, ajax, etc.

Advanced answer: its composed of 3 things, heap (shared memory), stack (currently executing code) and queue (code to be executed pushed by asynchronous apis.

Expert answer: There are 2 queues. Task and Microtask and can explain the difference.

## Tell me what you know about Promises

Basic answer: Explain the API

Advanced answer: Can explain how the callbacks are chained and executed.

## Tell me what you know about Iterators

Basic answer: closures that keep track of the current item and index in an enumerable object and whether there is a next item. 

Advanced answer: next api that returns object with value and Boolean done. Generators are factories for iterators.

## What can you tell me about metaprogramming in JS (reflection, introspection, code generation)?

Basic answer: Has heard of the concepts

Advanced answer: object reflection and intaspection using built in methods like hasOwnProperty or typeOf, instanceOf, keys), or built-ins like eval and try catch. ES6 Symbol, Reflect and Proxy. Can speak about how they are used.

## What can you tell me about WebComponents?

Basic answer: html way of creating reusable components…polymer

Advanced answer: composed of html imports, templates, custom object and shadowDom. Can speak to each concept. Can talk about the lifecycle methods of connectedCallback, disconnectedCallback, adoptedCallback and attributeChangedCallback.

## Framework specific question…how does frameworks x do y? ex. How does React handle change detection

Basic answer: understand the api of the framework.

Advanced answer: understand and can explain what happens under the hood.

# GENERAL QUESTIONS

## General HTML
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#### When do you think the use of HTML tables is appropriate?
 - Only for displaying tabular data.

#### What is the main difference between a div and a span tag?
 - One is a block level element while the other is an inline level element. Semantically, a span can exist inside of a div, but a div cannot exist inside of a span.

#### What is the label tag used for?
 - The <label> tag defines a label for an <input> element.

#### What is the difference between the OL and UL elements?
 - Ordered vs. Unordered lists.

#### How would you apply multiple CSS classes to an element?
 - Class=”class1 class2”

#### What are doctypes and why are they important?
 - The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.

## HTML5 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#### What is the difference between HTML and HTML5?
 - HTML5 is nothing more then upgraded version of HTML where in HTML5 Lot of new future like Video, Audio/mp3, date select function , placeholder , Canvas, 2D/3D Graphics, Local SQL Database added so that no need to do external plugin like Flash player or other library.

#### What are some advantages of HTML5?
 - Cleaner markup
 - Additional semantics of new elements like <header>, <nav>, and <time>
 - New form input types and attributes that will (and in Opera’s case, do) take the hassle out of scripting forms.

#### How many new tags you know in HTML5?
| Tag	| Description |
| --- | --- |
<article>	| Specifies independent, self-contained content, could be a news-article, blog post, forum post, or other articles which can be distributed independently from the rest of the site.
<aside>	| For content aside from the content it is placed in. The aside content should be related to the surrounding content
<bdi>	| For text that should not be bound to the text-direction of its parent elements
<command>	| A button, or a radiobutton, or a checkbox
<details>	For describing details about a document, or parts of a document
<summary>	| A caption, or summary, inside the details element
<figure>	| For grouping a section of
stand-alone content, could be a video
<figcaption>	| The caption of the figure section
<footer>	| For a footer of a document or section, could include the name of the author, the date of the document, contact information, or copyright information
<header>	| For an introduction of a document or section, could include navigation
<hgroup>	| For a section of headings, using <h1> to <h6>, where the largest is the main
heading of the section, and the others are sub-headings
<mark>	| For text that should be highlighted
<meter>	| For a measurement, used only if the maximum and minimum values are known
<nav>	| For a section of navigation
<progress>	| The state of a work in progress
<ruby>	| For ruby annotation (Chinese notes or characters)
<rt>	| For explanation of the ruby annotation
<rp>	| What to show browsers that do not support the ruby element
<section>	| For a section in a document. Such as chapters, headers, footers, or any other sections of the document
<time>	| For defining a time or a date, or both
<wbr>	| Word break. For defining a line-break opportunity.
<audio>	| For multimedia content, sounds, music or other audio streams
<video>	| For video content, such as a movie clip or other video streams
<source>	| For media resources for media elements, defined inside video or audio elements
<embed>	| For embedded content, such as a plug-in
<track>	| For text tracks used in mediaplayers
<tel>	| The input is of type telephone number
<search>	| The input field is a search field
<url>	| a URL
<email>	| One or more email addresses
<datetime>	| A date and/or time
<date>	| A date
<month>	| A month
<week>	| A week
<time>	| The input value is of type time
<datetime-local>	| A local date/time
<number>	| A number
<range>	| A number in a given range
<color>	| A hexadecimal color, like #82345c
<placeholder>	| Specifies a short hint that describes the expected value of an input field

#### What are the different types of storage in HTML5?
 - LocalStorage – Before HTML5 LocalStores was done with cookies. Cookies are not very good for large amounts of data, because they are passed on by every request to the server, so it was very slow and in-effective.
 - In HTML5, the data is NOT passed on by every server request, but used ONLY when asked for. It is possible to store large amounts of data without affecting the website’s performance.and The data is stored in different areas for different websites, and a website can only access data stored by itself.
 - And for creating localstores just need to call localStorage object like below we are storing name and address
SessionStorage – The sessionStorage object stores the data for one session. The data is deleted when the user closes the browser window. 

#### What is the difference between HTMl5 Application cache and regular HTML browser cache?
 - The new HTML5 specification allows browsers to prefetch some or all of a website assets such as HTML files, images, CSS, JavaScript, and so on, while the client is connected. It is not necessary for the user to have accessed this content previously, for fetching this content. In other words, application cache can prefetch pages that have not been visited at all and are thereby unavailable in the regular browser cache. Prefetching files can speed up the site’s performance, though you are of course using bandwidth to download those files initially.

#### What does the sandbox attribute do on an iframe element?
Sandbox attribute enables extra restrictions on the content that can appear in the inline frame. The value of the attribute can either be an empty string (all the restrictions are applied), or a space-separated list of tokens that lift particular restrictions.

### Web Components
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
What are Web Components and why would we use them?
Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps. 

#### What are the different technologies that make up Web Components?
Custom Elements, HTML Templates, Shadow DOM, HTML Imports

#### What are the lifecycle methods of a Custom Element?
**connectedCallback**: Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.
**disconnectedCallback**: Invoked each time the custom element is disconnected from the document's DOM.
**adoptedCallback**: Invoked each time the custom element is moved to a new document.
attributeChangedCallback: Invoked each time one of the custom element's attributes is added, removed, or changed.

#### What is the Shadow DOM?
Shadow DOM is the ability for a browser to maintain a subtree of dom nodes in a separate from the main dom tree allowing encapsulation and sandboxing of the code.


CSS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#### Can you tell me three ways you could include CSS in your document? 
link tag, style tag, style attribute, @import

#### Given a block level element with a fixed (and known) width, how would you center it horizontally on the page?
Set width, margin auto.

#### What are the main differences between absolute and relative positioning?
With absolute position, the element is positioned relative to its first positioned (not static) ancestor element where the relatively positioned element is positioned relative to its normal position in the dom stack.

#### Can you explain margin collapsing?
When the vertical margins of two elements are touching, only the margin of the element with the largest margin value will be honored, while the margin of the element with the smaller margin value will be collapsed to zero.

#### What is CSS specificity and why is it important? How is specificity calculated?
Specificity is a type of weighting that has a bearing on how your cascading style sheet (CSS) rules are displayed.
1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element.

#### Why should the !important CSS declaration be avoided? How can it generally be avoided?
!important overrides css specificity and can only be overridden by another !important tag further in the code.  It can be avoided by writing clean and concise css code.

#### What is the difference between display:none and visibility:hidden?
Visibility just makes the content invisible while retaining all space, while display none will collapse the space where the element should be rendered.

#### Which one of the above can only be accessible via JS? (Trick question)
Both are still accessible.

#### What does position:fixed do?
The element is positioned relative to the browser window.

#### Have you used CSS sprites? Can you explain the concept?
Combining images into a single image and using dom elements and background position to display them.

#### What is the difference between CSS and CSS3 ?
CSS3 is upgreaded version of CSS with new future like Selectors,Box Model, Backgrounds and Borders, Text Effects,2D/3D Transformations, Animations, Multiple Column Layout,User Interface etc

#### What new futures added in CSS3 for Borders and how Browser Support it?
border-radius, box-shadow, border-image
All modern browsers support it, with the exception of IE which only supports 9 and higher. Some browsers may require a prefix. (-moz, -o, etc)

#### What is Responsive Web Design?
Responsive web design is an approach to web design in which a site is crafted to provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices (from desktop computer monitors to mobile phones).

#### What are CSS Transitions and what are the properties you can specify when invoking a transition?
CSS3 transitions are effects that let an element gradually change from one style to another. transition-property, transition-duration, transition-timing-function and transition-delay.

#### What are CSS Media Queries?
In CSS, web developers can define a media typesuch as screen or print, and specify the look of the content by specifying conditions such as width, height, or orientation. A media query combines a media type and a condition to specify how web content will appear on a particular receiving device.

#### Name as many Media Query features as you can.
Width, height, device-width, device-height, orientation, aspect-ratio, device-aspect-ratio, color, color-index, monochrome, resolution, scan, grid.

#### What does display: flex do?
Defines a block level flexbox container that enables flex context for all its direct children.

#### What does justify-content do and what are some possible values?
This defines the alignment and spacing along the main axis (column or row, set by flex-direction). Possible values are flex-start, flex-end, center, space-between, space-around and space-evenly. 

#### What is the difference between space-between, space-around and space-evenly values of justify-content?
space-between aligns items at left and right edges, then evenly divides the space between the remaining items.
space-around spaces each item to have the same spacing around each side of each element.
space-evenly divides all empty space evenly along an axis.

#### What are Feature Queries?
CSS feature that defines the @supports rule, which allow us to wrap CSS in a conditional block that will only be applied if the current user agent supports a particular CSS property-value pair.

#### What is the difference between grid (display:grid) and flexbox (display:flex) layouts?
Grid is meant for page layouts, flex is for general dynamic content placement. Grid is 2 dimensional vs flex is one dimensional (height or width). Grid is layout first, setting containers and making content adapt, flex is content first where the layout adapts.

###JavaScript
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#### What are the benefits of using js frameworks?
Syntax sugar, cross browser support, rapid development….

#### How can you include Javascript in a page?
<script>, <script src=””>,inline 

#### What is JSON?
JavaScript Object Notation is a lightweight data-interchange format.

#### What involvement have you had with Ajax? Can you explain the underlying mechanism?
------
#### How would you create your own JavaScript class?
Use a function, new keyword, prototype - This is probably one of the most common ways. You define a normal JavaScript function and then create an object by using the new keyword.
```javascript
  function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };

}
Apple.prototype.toString = function() {
    return 'color: ' + this.color + ' | type: ' + this.type;
};

var apple = new Apple('macintosh');
apple.color = "reddish";
alert(apple.getInfo());
alert(apple.toString());
```

Object literals - Literals are shorter way to define objects and arrays in JavaScript. In this case you don't need to (and cannot) create an instance of the class, it already exists. So you simply start using this instance.
```javascript
  var apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    },
    toString: function () {
        return 'color: ' + this.color + ' | type: ' + this.type;
    }
}
apple.color = "reddish";
alert(apple.getInfo());
```

Singleton - You can use a function to define a singleton object.
```javascript
  var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}
apple.color = "reddish";
alert(apple.getInfo());
```

ES6 Class
```javascript
  class apple {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  getInfo = () => this.color + ' ' + this.type + ' apple';
const macintoshApple = new Apple(‘macintosh’, ‘red’);
```
  
#### How would you extend a javascript class?
The prototype property or extends property in es6.

#### What is the difference between class and prototypical inheritance?
Class Inheritance, class is like a blueprint — a description of the object to be created. Classes inherit from classes and create subclass relationships: hierarchical class taxonomies. Prototypal Inheritance a prototype is a working object instance. Objects inherit directly from other objects.

#### How would change the scope of a function (i.e. how would you change what the keyword ‘this’ is referring to within it)?
Bind, call, apply, that.

#### What is an anonymous function?
Anonymous functions are functions that are dynamically declared at runtime. They’re called anonymous functions because they aren’t given a name in the same way as normal functions.

#### How can you make a link open in a new window using javascript?
Window.open

#### What is the difference between setTimeout and setInterval?
One delays the execution of a function, while the other executes a function continuously in an interval.

#### How can a timeout or interval be cancelled?
clearInterval()

#### What is a closure, and why would you use one?
A closure, in JavaScript, can simply be described as a retained scope;  The benefit of a closure is in the fact that it retains the scope (the “scope chain”) of the outer (or “parent”) execution context. Can be used to solve looping with functions, 

#### How do you stop an event from bubbling further up the DOM?
event.stopPropagation()

#### How do you prevent a browser from following a link when clicked on?
event.preventDefault ()

#### How do you add new elements to the DOM?
createElement, appendChild

#### What do Array.push and Array.pop do?
The push() method adds new items to the end of an array, and returns the new length.
The pop() method removes the last element of an array, and returns that element.

#### What is 'eval' used for? Why should it be avoided?
1) It requires a compile and is therefore slow
2) What if a malicious script found its way into the eval argument?
3) It looks ugly
4) It inherits the execution context and this binding of the scope in which its invoked

#### What is the event loop and how does it work?
Javascript is single threaded and the event loop is not part of the language spec itself, instead it is part of browser/nodejs architecture built around javascript that allow asynchronous events to execute in context of a single threaded language. This concurrency architecture is based on 4 things, a stack, queue, heap and the event loop. Currently running code is held on the call stack. As functions call other functions the call stack grows, and as they return, the call stack pops. Any events, or asynchronous calls (like setTimeout) are not added to the stack, instead being added to a message queue, waiting to be processed. Objects that are created during execution of a call stack are stored in the heap. The even loop runs constantly checking whether or not the stack is empty. When it is, it pulls the next item from the queue and executes it on the stack. The event loop concept is what allows javascript to be used in a asynchronous environment.

#### What does setTimeout(someFunction, 0) do and when would you use it?
It executes the someFunction in the “next” tick of the event loop. Its useful if you want to execute a particular function after the current call stack has completely returned, and the browser has executed other tasks, like re-rendering. For example, if you want to execute a I/O heavy function, but not block other updates to the browser, or when you make a css change and need to read the new calculated position in the browser. The change can be inlined, but the read should be setTimeout 0ed to allow the browser to apply the change in the dom.

#### What is a template literal?
Template literals are the string with embedded code and variables inside. Template literal allows concatenation and interpolation in much more comprehensive and clear in comparison with prior versions of ECMAScript.

#### What is Spread Operator and where can they be used?
ES6 operator that spreads arrays and iterative key value pairs of objects. Spread operator can be used to spread the contents of an array or object into individual assignments, for example when inserting into an array ([1,2, ...someArray, 5]), object (state = {...state, foo: ‘bar’}), destructuring assignment for rest ([a, ...b] = someArray), or spreading as function attributes (hello(...world))

#### What is destructuring assignment?
Destructuring assignment is a new feature that allows us to map properties from a source object or array into a new object or set of variables declaratively instead of imparatively. Example: [a, b] = [1, 2]

#### What mechanism do you use to communicate across an iframe?
The **window.postMessage()** method safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.

## Interview Challenges

### Elevator problem
Think about how an elevator works in real life. There is a panel outside with 2 buttons (generally), and there are a bunch of numbered buttons on the inside of an elevator. Take some time and think about how an elevator works. When does it move, when does it stop. Then implement a class that mimics this behavior. To get you started, I will give you a few method signatures:

```javascript
const el = new Elevator(...); // define what attributes would you take in the constructor
el.call(1, 'up'); // call takes 2 params, a floor where it was called from and the desired direction the user wants to travel;
el.goTo(5); // goTo takes in a single desired floor number.
```

For the start, don't worry about how the elevator moves, or doors open in the physical world. Just assume that enough time is passing between state changes (floor changes) that new call and goTo events can occur. Implement any additional methods you need.

#### Answer
___________
We are looking for a few things here: 
1. Can the candidate break down the real life object and represent it in code
2. Can the candidate correctly store and read state asynchronously (no while loops)
3. Can the candidate correctly identify and code the algorithm for the elevator
The constructor should set the physical limitations of the elevator ( number of floors ). The class should also keep track of the floors it needs to go to, the current floor it's on and the current direction of travel. The direction attribute of call() is a big hint that there are multiple directions that the elevator needs to keep track of. There is the direction from current position to next floor in the queue, the direction towards the call and the desired direction. The algorithm for the elevator is such that it once it is going a certain direction it should not change direction until it has passed all the desired floors in that said direction. New floors can be added to the stack, but only if they are ahead of the current position and are desired to move in the same direction. This means that the elevator needs to keep track of 3 stacks. Current Direction, Opposite Direction, Current DIrection of Floors Passed. 

Example implementation:
```javascript
class Elevator {
 constructor(numOfFloors) {
   this.numOfFloors = numOfFloors;
   this.currentFloor = 1;
   this.currentDirection = 'up';
   this.currentDir = [];
   this.nextDir = [];
   this.finalDir = [];
   this.move();
 }

 move = () => {
   if (this.currentDir.length === 0) {
     this.currentDir = this.nextDir;
     this.nextDir = this.finalDir;
     this.finalDir = [];
     this.currentDir = this.currentDir === 'up' ? 'down' : 'up';
     this.move(); // call itself again
   } else {
     if (this.currentDir === 'up' && this.currentFloor < this.numOfFloors)
       this.currentFloor++;
     else if (this.currentDir === 'down' && this.currentFloor > this.numOfFloors)
       this.currentFloor--;
     if (this.currentDir.includes(this.currentFloor)) {
       this.currentDir.shift();
       setTimeout(this.move, 20000); // account for stopping on the floor and elevator move time
     } else {
       setTimeout(this.move, 10000); // account for elevator move time
     }
   }
 }

 call = (floor, dir) => {
   if (floor < 1 || floor > this.numOfFloors) throw new Error("invalid floor");
   if (dir === this.currentDirection) {
     let floorDiff = this.getFloorDiff(floor);
     if (floorDiff > 0) {
       // You're going in the same direction and the elevator has not missed you
       this.currentDir = this.addTo(this.currentDir, floor, dir);
     } else {
       // You're going in the same direction but the elevator has missed you and now you have to wait until the oposite queue is empty too.
       this.finalDir = this.addTo(this.currentDir, floor, dir);
     }
   } else {
     // You're going in the opposite direction, so you're in the next queue.
     this.nextDir = this.addTo(this.nextDir, floor, dir);
   }
 }

 static goTo = (floor, dir) => {
   if (floor < 1 || floor > this.numOfFloors) throw new Error("invalid floor");
   let floorDiff = this.getFloorDiff(floor);
   if (floorDiff > 0) {
     // You're going in the same direction
     this.currentDir = this.addTo(this.currentDir, floor, dir);
   } else {
     // You're going in the opposite direction, so you're in the next queue.
     this.nextDir = this.addTo(this.nextDir, floor, dir);
   }
 }

 getFloorDiff = (floor) => {
   if (this.currentDir === 'up') {
     return floor - this.currentFloor;
   }
   return this.currentFloor - floor;
 }

 addTo = (floors, floor, dir) => {
   floors.push(floor);
   let unique_floors = floors.filter(function (elem, index, self) {
     return index == self.indexOf(elem);
   });
   unique_floors.sort();
   if (dir === 'down')
     unique_floors.reverse();
   return unique_floors;
 }

}
```

Followup questions can be asked about how would you deal with multiple elevators (var el = new ElevatorBank(10, 3)), or how to optimize the algorithm for shortest traveled distance instead of current direction fifo. 

### Vending Machine problem

Imagine how a vending machine works. You put money in, you punch in a code, an item is dispensed. I want you to model a vending machine as a class. To get you started, I will give you a few method signatures:

```javascript
let vm = new VendingMachine(...);
vm.addMoney(1);
vm.buyItem('A3'); // console.logs ‘VENDING ITEM COKE, CHANGE .25’
```

Don't worry about how an item is physically dispensed. We can just console.log a statement and thats fine.

#### Answer
__________________
We’re looking for a few things here:
1.	Can the candidate break down a real life object and represent it in code.
2.	Can the candidate store the items in a memory efficiently.
3.	Can the candidate efficiently map between codes and locations.
The constructor should take in the physical dimensions of the machine (row, col, maxItems). The inventory can then be tracked as a 2 dimensional array, 1 dimensional array or dictionary. The first two work, however every time a selection is made, we have to convert a character code to row/column or index. We can optimize this by precalculating all slots codes ahead of time and storing them in a dictionary. Each item, should have a label, cost and amount of items. When a selection is made, first we have to do the item lookup, then check if the item exists and we have put enough money in. If so we vend the item, return change and update the machines state.

**Example Solution**:
```javascript
class VendingMachine {
 constructor(rows, cols, maxItems) {
   this.rows = rows;
   this.cols = cols;
   this.maxItems = maxItems;
   this.cash = 0;
   this.slots = this.generateSlots(rows, cols);
 }

 generateSlots = (rows, cols) => {
   let slots = {};
   Array(rows).fill(0).forEach((el, rowNum) => {
     let chr = this.getCharCodeFromInt(rowNum);
     Array(cols).fill(0).forEach((el, colNum) => {
       slots[`${chr}${colNum + 1}`] =  new VendingMachineItem('empty', 0, 0);
     });
   });
   return slots;
 }

 //A-Z, AA-ZZ, AAA-ZZZ...
 getCharCodeFromInt = (int) => {
   let repeatNum = Math.floor(int/26) + 1;
   let char = String.fromCharCode(65 + int%26);
   return char.repeat(repeatNum);
 }

 stockItem = (slot, label, cost, stock) => {
   if (!this.slots[slot])
     throw new Error('Invalid Slot');
   else if (stock > this.maxItems)
     throw new Error('Too many items');
   else
     this.slots[slot] = new VendingMachineItem(label, cost, stock);
 }

 addStock(slot, stock) {
   if (!this.slots[slot])
     throw new Error('Invalid Slot');
   else if (this.slots[slot].stock + stock > this.maxItems)
     throw new Error('Too many items');
   else
     this.slots[slot].addStock(stock);
 }

 addMoney(cash) {
   this.cash += cash;
 }

 buyItem(slot) {
   const item = this.slots[slot];
   if (!item)
     throw new Error('Invalid Slot');
   else if (item.stock === 0)
     throw new Error('Sold Out');
   else if (item.cost > this.cash)
     throw new Error('Not enough cash');
   else {
     item.vendItem();
     const change = this.cash - item.cost;
     console.log(`Change: ${change}`);
     this.cash = 0;
   }
 }
}

class VendingMachineItem {
 constructor(label, cost, stock) {
   this.label = label;
   this.cost = cost;
   this.stock = stock;
 }
 get label() { return this.label; }
 get cost() { return this.cost; }
 get stock() { return this.stock; }
 addStock = numberOfItems => {
   this.stock += numberOfItems;
 }
 vendItem = () => { this.stock--; console.log(`Vending item ${this.label}`); }
}
```

Follow up questions can be: what happens if you have one large item that takes 2 spaces to store? What methods would you add to manage the inventory? How would you deal with giving change if the machine is limited by the amount of coins? What if we have different items in the same slot?
