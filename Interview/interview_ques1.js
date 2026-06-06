function abc(){
    return
    {
        a:1
    }
}

console.log(abc())

// Reason:   “This happens due to JavaScript’s Automatic Semicolon Insertion. When return is on a separate line, JavaScript inserts a semicolon right after it, so the function returns undefined instead of the object.”

//  “In JavaScript, a line break immediately after     return should be avoided if you’re returning an object or expression, because of ASI.”

