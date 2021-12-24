class Animal {
    static age = 10;
    constructor(name){
        console.log(1111);
        this.name =name;

    }
    showName(){
        console.log(this.name);
    }

    static eat(){
        console.log("eat");
    }
} 

let a = new Animal("H");
// a.showName();
console.log(a.name)

Animal.eat();
console.log(Animal.age)