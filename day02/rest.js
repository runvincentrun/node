function func (a, b, ...rest) {
    console.log(a, b, rest);
}

func(10, 20, 30, 40,50);

let a = {
    name: " Hello",
    age: 22,
}

let person = {
    ...a, 
    phone: 123,
}
console.log(person)