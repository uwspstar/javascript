# Advanced Javascript


### Javascript Runtime
https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13760086#overview

### trick to avoid overstack flow
```
setTimeout(removeItemsFromList, 0); // move to API JS runtime, event loop handle it
```
### Node.js 
- a javascript runtime build on v8 engine

### Execution Context
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772854#overview
- ```global object``` & ```this```
### Lexical Environment
- execution context is going to tell me which lexical environment which planet is currently running
### Hoisting
- only work with ```var``` and ```function``` key words
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772862#overview

### Function Invocation
- Function Expression
```
const fn = function () { ... }
const fn = () => { ... }
```
- Function Declaration
```
function fn () { ... }
```
### arguments Keyword
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772874#overview
### Variable Environment
```
//Variable Environement

function two() {
  var isValid; // 5. isValid is undefined in this execution context.
}

function one() {
  var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
  two(); // 4. New execution context created.
}

var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
one() // 2. New execution context is created on top of the stack.

```
### Scope Chain
### Exercise: JS is Weird
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772898#overview
```
// Weird Javascript #1 - it asks global scope for height. 
// Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.
function weird() {
  height = 50
}

var heyhey = function doodle() {
  // code here
}
heyhey();
doodle(); // Error! because it is enclosed in its own scope.
```
### Function Scope vs Block Scope
```
//Function Scope
function loop() {
  for( var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i)
}

//Block Scope
function loop2() {
  for( let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i)
}
```
### IIFE
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772914#overview
###  this Keyword
- https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772916#overview
```
//this
const obj = {
  name: 'Billy',
  sing: function() {
    return 'llala ' + this.name + '!'
  },
  singAgain: function() {
    return this.sing()
  }
}

function importantPerson() {
  console.log(this.name)
}

const name = 'Sunny';
const obj1 = { name: 'Cassy', importantPerson: importantPerson}
const obj2 = { name: 'Jacob', importantPerson: importantPerson}

obj2.importantPerson()
```
### call(), apply(), bind()
```
const wizard = {
  name: 'Merlin',
  health: 100,
  heal: function(num1, num2) {
    this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 50
}

wizard.heal.call(archer, 50, 60)
wizard.heal.apply(archer, [20, 30])
archer
// function borrowing

const healArcher = wizard.heal.bind(archer, 50, 60);
console.log(archer)
healArcher()
console.log(archer)
```
```
const array = [1,2,3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
  return Math.max.apply(null, arr);  
}

getMaxNumber(array)
```
### bind() and currying
```
function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
```
###  Exercise: this Keyword
```
var b = {
  name: 'jay',
  say() {console.log(this)}
}

var c = {
  name: 'jay',
  say() {return function() {console.log(this)}}
}

var d = {
  name: 'jay',
  say() {return () => console.log(this)}
}
```
### Javascript Types
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects