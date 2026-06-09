// Async/Await

async function GetUserData(){
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/posts')
        // console.log(response);
        
        if(response.ok){
            console.log("Fetching data from server");
        }
        else{
            console.log("Data did not get fetched"); 
        }
        const data= await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("error");
    }
}

GetUserData()