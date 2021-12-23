const arr = [1,2,3];
const arr2 = [4,5,6];
function func(a,b,c){
    console.log(a, b, c);
}


func(...arr);


const newArr = [...arr, ...arr2];
console.log(newArr)


const aa = {age: 11, name: 'Hello'}
const bb = {age: 22}


const cc = {...aa, ...bb}
console.log(cc)



const dd = {name: 'Hello!!!'}
let newObj = Object.assign(dd, aa);
console.log(newObj)

let new2 = newObj;
new2.name = "BBB";
console.log(new2)
console.log(newObj)