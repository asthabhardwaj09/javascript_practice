function outer() {
    let name = "Mohit";
    function inner() {
        console.log(name);
    }
    return inner;
}
const fn = outer();
function caller() {
    let name = "Rahul";
    fn();
}

caller()