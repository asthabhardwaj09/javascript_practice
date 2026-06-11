// Write a function that fetches user and return the data


async function user() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            // console.log("HTTP request failed");
        }
        else {
            const data = await response.json()
            return data
        }
    } catch (error) {
        // console.log("Error",error.message);

    }
}

// console.log(user())

//promise approach

// user().then(data => {
//     console.log(data);
// });

//async approach

async function main() {
    const data = await user();
    // console.log(data);
}

main();



//------------------

// async function test() {
//     return Promise.resolve("Hello");
// }

// test().then(data => console.log(data));

// async function test() {
//     return "Hello";

// }

// console.log(test());


//-------------------------

// async function studentdata(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         if(!response.ok){
//             throw new Error("HTTP request failed");
//         }
//         else{
//             const data= await response.json()
//             console.log(data);

//         }
//     } catch (error) {
//         console.log("Error", error.message);

//     }    
// }

// studentdata()


//independent api

async function studentdata() {
    try {
        //wrong approch

        // const student_name= await fetch('https://jsonplaceholder.typicode.com/users')
        // const student_rollno= await fetch('https://dummyjson.com/users')
        // const student_registerno= await fetch('https://reqres.in/api/users?page=1')

        //correct approach

        // Pass the fetch promises directly into Promise.all — no await before each

        const [student_name, student_rollno, student_registerno] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://dummyjson.com/user'),
            fetch('https://reqres.in/api/users?page=1')
        ]);

        //Now parse the JSON from each response

        const [nameRes, rollRes, registerRes] = await Promise.all([
            student_name.json(),
            student_rollno.json(),
            student_registerno.json()
        ]);
        console.log("nameRes:  ", nameRes);
        console.log("rollRes:  ", rollRes);
        console.log("registerRes:  ", registerRes);

    } catch (error) {
        console.error('API failed:', error);
    }
}

studentdata()