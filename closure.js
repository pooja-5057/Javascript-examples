
// 1.
// function outerFunction(){
//     let outerFunction = "I am outside!";

//     function innerFunction() {
//         console.log(outerFunction);
//     }
//     return innerFunction;
// }

// const myFunction = outerFunction();
// myFunction();


// 2.

// function outer () {
//     let message = "Hello, Closure!";
//     return function inner() {
//         console.log(message);
//     };
// }
// const myclouser = outer();
// myclouser();

//3.private variables

function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

