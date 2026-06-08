let map = new Map();

map.set("name", "Astha");  // string key
map.set(101, "Student");   // number key
map.set(true, "Active");   // boolean key

console.log(map.get("name")); // Astha
console.log(map.get(101));    // Student
console.log(map.get(true));   // Active


//map

let user =new Map()

let student1={
    name:"Astha Bhardwaj"
}

user.set(student1,"Frontend Developer")
// student = null;
console.log(user);



//weekmap

//"WeakMap me values ko access karne ke liye hume object key ka reference chahiye hota hai. Hum get(), set(), has(), aur delete() use kar sakte hain, lekin keys() ya entries() nahi."

let user2= new WeakMap()

let student2={
    name1:"Aditi Singh"
}

user2.set(student2,"Tester")

// user2.delete(student2);  //false
// student2=null   //false

console.log(user2.get(student2));
console.log(user2.has(student2));
console.log(user2);  //WeakMap { <items unknown> }

//"Why can't we see WeakMap entries in console?"

// Answer:

// WeakMap is not iterable because its keys are weakly referenced and can be garbage collected at any time. Therefore JavaScript does not provide methods like keys(), values(), entries(), or reliable enumeration of its contents.
