// 1.

// console.log("Fetching data...");
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(resolve => resolve.json())
// .then(data => console.log(data))
// .catch(error => console.error("error" , error)
// )

// 2.

// let myPromise = new Promise((resolve,reject) => {
//     let success = true;

//     setTimeout(() =>{
//         if (success) {
//             resolve("Promise resolved successfully!")
//         } else {
//             reject("Promise rejected!")
//         }
//     },2000)
// });

// myPromise
// .then(result =>  console.log(result))
// .catch(error => console.log(error))
// .finally(() => console.log("Promise completed"));

// 3. Promise.all() – Run Multiple Promises in Parallel
 
// let p1 = new Promise (resolve => setTimeout(() => resolve("first"),1000));
// let p2 = new Promise (resolve => setTimeout(() => resolve("second"),2000));
// let p3 = new Promise (resolve => setTimeout(() => resolve("third"),1500));

// Promise.all([p1,p2,p3]).then(results => console.log(results));

//Promise.race() – First Promise to Resolve Wins

// let p1 = new Promise (resolve => setTimeout(() => resolve("first"),1000));
// let p2 = new Promise (resolve => setTimeout(() => resolve("second"),2000));
// let p3 = new Promise (resolve => setTimeout(() => resolve("third"),1500));

// Promise.race([p1,p2,p3]).then(results => console.log(results));