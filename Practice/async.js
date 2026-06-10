// Async/Await

async function GetUserData() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/post');

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

} catch (err) {
    console.log(err.message);
}}

GetUserData()


async function StudentUser(){
    setTimeout(function(){
        console.log("Hello from Async");
        
    },1000)
}

StudentUser()


console.log("A");

async function test() {
    console.log("B");

    await Promise.resolve();

    console.log("C");
}

test();

console.log("D");


console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");