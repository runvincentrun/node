"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = exports.default = exports.age = void 0;
// 第一种方式
let name = "张三";
exports.name = name;
let age = 11; // 第二种方式
// let name = "王五";
// let age = 23;
// module.exports = { name, age };
// 第三种方式

exports.age = age;
let name1 = "老王";
let age1 = 55;
var _default = {
  name1,
  age1
};
exports.default = _default;