let name = "nodeJs";
let age = 11;

let obj = {
    name,
    age,
    email: "nodejs@123.com"
}


const {name:objName, age:objAge, email} = obj;
console.log(objName, objAge, email)

console.log(obj)
