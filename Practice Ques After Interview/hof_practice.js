// function outer(a,b){
//     // let a=10
//     // let b=20
//     let result=a+b
//     console.log(result);
//     console.log("astha bhardwaj");
    
// }
// // function inner(fn,fn1){   //bad approch
// function inner(fn){
//     fn()
//     // fn1()
// }

// outer(10,20)
// // inner(outer,10,20)
// inner(outer)


// // function sum(a,b){
// //     // let a=10
// //     // let b=20
// //     let result=a+b
// //     console.log(result); 

// // }

// // sum(1,2)


// function sum(a,b){
//     let result=a+b
//     console.log(result);
//     console.log("astha bhardwaj");
// }

// function adding(fn){
//     fn()
// }

// adding(sum)


// how to pass an argument in the higher order function

function bookseller(book1,book2){
    console.log(book1, book2) // debug
    let sales = book1 + book2
    console.log("sales of books = ", sales)
}

function customer(fn){
    fn(1,2)
}

customer(bookseller)

//----------------

function bookseller(a,b){
    let sales= a+b
    console.log("sales of books = ",sales)
}

function customer(fn,book1,book2){
    fn(book1,book2)
}

customer(bookseller,1,2)


//customer ke book1 ki value = 1

// customer ke book2 ki value = 2

// ↓

// fn(book1, book2)

// ↓

// bookseller(1, 2)

// ↓

// bookseller ke book1 = 1
// bookseller ke book2 = 2



// function astha(a,b){
//     let result=a+b
//     console.log(result);
// }

// let a=10
// let b=20
// astha(a,b)

// The callback function
function logGreeting(name) {
  console.log(`Hello, ${name}!`);
}

// The higher-order function receiving the callback
function processUser(userAction) {
  const name = "Alice";
  userAction(name); // Invoking the callback here
}

// Pass the function reference (without parentheses)
processUser(logGreeting); 
// Output: Hello, Alice!
