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


async function test() {
    return "Hello";
}

console.log(test());


console.log("1");

setTimeout(() => console.log("2"), 0);

async function test() {
    console.log("3");

    const response = await fetch('https://jsonplaceholder.typicode.com/post');
    const data = await response.json()
    console.log(data);

    await Promise.resolve();

    console.log("4");
}

test();

Promise.resolve().then(() => console.log("5"));

console.log("6");


console.log("1");

setTimeout(() => console.log("2"), 0);

async function test() {
    console.log("3");

    const data = await Promise.resolve("API Data");

    console.log(data);

    await Promise.resolve();

    console.log("4");
    await Promise.resolve();

    console.log("8");
}

test();

Promise.resolve().then(() => console.log("5"));
Promise.resolve().then(() => console.log("7"));

console.log("6");



console.log("A");

async function test() {
  console.log("B");

  await Promise.resolve();

  console.log("C");
}

Promise.resolve().then(() => console.log("D"));

test();

console.log("E");

console.log("1");

setTimeout(() => console.log("2"));

Promise.resolve().then(() => console.log("3"));

console.log("4");