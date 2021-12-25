
console.log(exports == module.exports);
// console.log(this.name = "Hello");
// const haha = module.exports;
module.exports = {
    name: '2',
}

exports = module.exports;
console.log(exports);
console.log(module.exports);
// console.log(haha);
// console.log(this == exports)
// exports 是 module.exports 的引用.  文件中才有exports. 交互模式下没有exports.
// 在js文件中，this指向这个模块导出的这个对象. 交互模式下this指向的是global. 


// 如果使用module.exports 导入, exports 会丢失数据. 需要重新赋值给exports来获取数据的更新.
// e.g. exports = module.exports;