// 1. 使用var会出现变量提升, 先试用后声明的现象。
// console.log(a);
// let a = 10;


// 2 var 可以重复声明同名字的变量。

// var b= 10;
// var b = 20;
// console.log(b);

// let b = 10;
// let b = 20;
// console.log(b);

// for循环时全局污染. 可以使用let来避免污染。
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
