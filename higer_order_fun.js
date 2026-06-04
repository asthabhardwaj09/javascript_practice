//  Higher Order Function

// function return another function 
// function that pass another function as a argument


function outer(){
    return function inner(){
        console.log("astha")
    }
}

let result= outer()
result()


//--------------------------------------------
 
function cricket(){
    let player1="Mahendra Singh Dhomi"
    let player2= "Harmanpreet Kaur"
    return [player1,player2]
}

function badminton(playername){
    let [player1,player2] = playername()
    console.log(player1 + player2)
}

badminton(cricket)

//I called fn() because fn contains the reference to the function that was passed as an argument. Calling fn() executes that function. Without fn(), the function would only be passed and stored, but it would never run.


function passing(){
    console.log("astha");
    
}

function passing2(fn){
    fn()
    console.log("hello!!")
}

passing2(passing)