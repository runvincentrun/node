class Animal {
    static age = 10;
    constructor(name){
        this.name =name;

    }
    showName(){
        console.log(this.name);
    }
    showName(newName){
        console.log(newName);
    }

    static eat(){
        console.log("eat");
    }
} 


class Cat extends Animal{
    constructor(name, sex) {
        super(name    );
        this.sex = sex;
    }

    meow(){
        console.log("Meow...")
    }

    showName(){
        console.log(`My name is ${this.name} Meow`);
    }

    showName(newName){
        console.log(`My name is ${newName} Meow`);
    }
}

let c = new Cat("Tom", 'Male');
c.meow();
console.log(c.name);
console.log(c.sex);
c.showName(123);