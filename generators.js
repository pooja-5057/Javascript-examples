// function* numberGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const numbers = numberGenerator();
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);

function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
const numbers =  numberGenerator();
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
