function outer(){
    let a=20
    function inner(){
        let b=20
        let result= a+b
        // a=a+50
        // return a
        console.log(result);

    }
    return inner()
    // console.log(a)
}

// let final=outer()
// console.log(outer());
// console.log(final());
// final()
outer()
console.log(outer())



// function createCounter() {
//    let count = 0;
//    return function() {
//      count++;
//      return count;
//    }; 
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());


//-------promise

// const user = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Hello from promise")
//     },0)
// })


async function student_data() {
    try {
        let response= await fetch('')
        let data = await response.json()
        console.log(data);
        
    } catch (error) {

    }
}


// let student=[1,2,3,4,5]
// let user =[11,12]
// let result=...student+...user

let arr= [1,2,3,4]
let data= arr.map((arr)=> arr*2)

console.log(data);



