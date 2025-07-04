// 1. Asynchronous Code

// console.log("Start");

// setTimeout (() =>{
//     console.log("Inside Timeout");
// });

// console.log("end");

// 2. Promises and Microtask Queue

// console.log("Start");

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// Promise.resolve().then(() => console.log("Promise"));

//3.Fetching Data

// console.log("fetching data...");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(responce => responce.json())
// .then(data => console.log("data resived", data))
// .catch(error => console.error("Error",error))

// console.log("request sent")
