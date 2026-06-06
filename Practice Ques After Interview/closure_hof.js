function outer() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

// const fn1 = outer();
// const fn2 = outer();

// fn1();
// fn1();
// fn2();
// fn1();


//-------------------


for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 1000);
}

// Why?
// var is function-scoped.
// All callbacks share the same i.
// Loop finishes first, making i = 4.
// Then all callbacks run and print 4.

// We can fix it like this

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 1000);
}

//HOF

function calculator(operation) {
    return operation(10, 5);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculator(add));
console.log(calculator(multiply));

function sum(){
    return 10+20
}
console.log(sum);


function sub(){
    // let result=a-b
    console.log("result")
}
// sub(2,1)
console.log(sub) //function is not called only got the reference

function multiply(){
    return function inner_sum(){
        console.log("astha")
    }
}

multiply()()
// console.log(multiply());
let output= multiply()
console.log(output);
output()
console.log(output()) //undefined why?

function outer() {
    function inner() {
        return 100;
    }

    return inner;
}

// console.log(outer());
outer()