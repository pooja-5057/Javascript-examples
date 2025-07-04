// 1. Error Handling with try...catch

// async function fetchdata() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("Error" , error);
//     }
// }
// fetchdata();

// 2.Basic async/await Example

// async function fetchdata() {
//     return "Hello,async/await!"
// }
//   fetchdata().then(result => console.log(result));

// 3. Using await to Handle Promises

function getData() {
    return new Promise (resolve =>{
        setTimeout(() => resolve("Data received"),2000);
    });
}

async function fetchdata() {
    console.log("Fetching  Data....");
    let result = await getData();
    console.log(result)
}
fetchdata();