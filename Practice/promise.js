// //promise

// // fetch('https://jsonplaceholder.typicode.com/posts')
// // .then(response=>response.json())
// // .then(data=> console.log(data));

const user =fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        .then(response => {
            if (!response.ok) throw new Error("API failed");
            return response.json();

        })

user
    .then(data => console.log(data))
    .catch(err => console.log(err));



// console.log("Start");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(() => console.log("Fetch Completed"));

// setTimeout(() => {
//   console.log("Timeout Completed");
// }, 0);

// console.log("End");



// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");