let user={
    name:"Astha",
    lastname:"bhardwaj",
    School_data: function(){
        console.log(`Hello this side ${this.name} ${this.lastname}`);
    }
}

user.School_data()

let result= user.School_data;
result()

//bind()

const boundGreet = user.School_data.bind(user)
boundGreet()