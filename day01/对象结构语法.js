let obj = {
    name: "nodeJS",
    age: 11,
    email: "nodejs@123.com"
}

let {name:myName, age, email} = obj;

console.log(myName)