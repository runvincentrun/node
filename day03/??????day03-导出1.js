let num = 10;
function sum(a, b) {
    return a + b;
}

class Animal {
    constructor(){
        this.age = 10;
    }
}

// exports.num = num;

// exports.add = sum;
// exports.Animal = Animal;

module.exports = {
    num, sum, Animal
}