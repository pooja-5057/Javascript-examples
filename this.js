// 1. this Inside an Object

// const person ={
//     name: 'Alice',
//     greet() {
//         console.log(`Hello,my name is ${this.name}`);
//     }
// };
// person.greet();

// const greet = person.greet; //(in strict mode, `this` is `undefined`
// greet();

// 2. this in Global Scope
// console.log(this); //output : {}

// 3. this in a Regular Function (Default: undefined in Strict Mode)

// "use strict";
// function show() {
//     console.log(this);
// }
// show();// Output: undefined (in strict mode)

// 4.  this in an Arrow Function
 
// const user = {
//     name: "Alice",
//     greet: function () {
//         let arrowFunc = () =>{
//             console.log(this.name);
//         }
//         arrowFunc();
//     }
// }
// user.greet();

// 5. this in Constructor Functions
function Person(name) {
    this.name = name;
}

const john = new Person("John");
console.log(john.name); 

