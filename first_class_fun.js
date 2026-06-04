//function is inside variable

function name(){
    // console.log("Hello From JS");
}

let result= name
result()


//function is passed as a argument

function student1(){
    console.log("Hello JS");
}

function student2(fn){
    fn()
    console.log("Hello from astha");
    // fn()
    
}
student2(student1)


//function return another function

function outer() {
    return function inner() {
        console.log("Hello from Inner Function");
    };
}

let result = outer();

result();