// function outer(){
//     return function inner(){
//         console.log("Hyy from JS");
        
//     }
// }

// let result= outer()
// // console.log(result());
// result()

function student1(a,b){
    
    console.log("Hyy from Higher Order Function"+a+b)
}

function student2(val){
    return val

}


student2(student1(1,2)) //wrong approach


// let user={
//     name:"astha",
//     num:44
// }

// let user1 = new Object()


function outer(){
    let value=2

    function inner(){
        value2=3
        console.log(value+value2)
    }
    inner()
}

let total=outer()
total()



