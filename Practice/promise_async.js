//promise

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=> console.log(data));

// Async/Await

async function getData(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        const data= await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
        
    }
}


