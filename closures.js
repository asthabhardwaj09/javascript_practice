// function outer(){
//     let student1 ="astha"

//     function inner(){
//         let student2= "suhani"
//         let result = student1+student2

//         console.log(result);
        
//     }
//     inner()
// }

// outer()


// function outer() {
//     let value1 = "astha";

//     function inner() {
//         console.log(value1);
//     }

//     return inner;
// }

// const myFunc = outer();

// myFunc(); 


//When an inner function is returned, JavaScript keeps its lexical environment in memory because the inner function still references variables from the outer scope. This preserved combination of the function and its remembered scope is called a closure.


function outer_sum(){
    let num1=20

    function inner_sum(){
        let num2= 30
        let result=num1+num2
        console.log(result)
    }
    return inner_sum
}

outer_sum() // we are returning inner_sum from outer_sum, but we are not holding or calling it

// outer_sum()()  // immediate call of the returned function

// let total_Sum = outer_sum()
// total_Sum()    // calling the returned function later



