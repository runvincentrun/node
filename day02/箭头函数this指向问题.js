function People(name, age){
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log(this);
        setTimeout(function() {
            console.log(this.name);
        }, 1000)
    }
}

let a = new People("Vincent", 25);
// a.say();

// 箭头函数没有自己的作用域 指向的事父级的作用域。


let obj = {
    name: "nodeJs",
    age: 11,
    say: function(){console.log(this)}
}
obj.say()