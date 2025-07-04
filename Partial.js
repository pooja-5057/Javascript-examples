// 1.
// function add (a,b) {
//     return a + b;
// }
//  const  double = add.bind(null,2);
//  console.log(double(2));

// 2.

function greet(greeting, name) {
  return `${greeting},${name}`;
}
const greetHello = greet.bind(null, "Hello");
console.log(greetHello("Alice"));
