// 1. stores variables in memory when they are created.
let x = 10; // Allocates memory for number
let str = "Hello"; // Allocates memory for string
let obj = {name: "Alice" , age:34}; // Allocates memory for object


// 2.Automatic Garbage Collection
function createUser(){
    let user = {name:"john"};  // Object created in memory
    console.log(user.name);
}
createUser();
// After function execution, "user" is no longer referenced
// Garbage Collector removes it from memory


