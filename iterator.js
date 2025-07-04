const colors = ['red','grren','yellow','pink'];
const GFG =  colors[Symbol.iterator]();
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());

//output

// { value: 'red', done: false }
// { value: 'grren', done: false }
// { value: 'yellow', done: false }
// { value: 'pink', done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }