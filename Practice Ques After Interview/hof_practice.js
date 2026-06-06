function outer(a,b){
    // let a=10
    // let b=20
    let result=a+b
    console.log(result);
    console.log("astha bhardwaj");
    
}
// function inner(fn,fn1){   //bad approch
function inner(fn){
    fn()
    // fn1()
}

outer(10,20)
// inner(outer,10,20)
inner(outer)


// function sum(a,b){
//     // let a=10
//     // let b=20
//     let result=a+b
//     console.log(result); 

// }

// sum(1,2)


function sum(a,b){
    let result=a+b
    console.log(result);
    console.log("astha bhardwaj");
}

function adding(fn){
    fn()
}

adding(sum)

