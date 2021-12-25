const buf1 = Buffer.from([97, 98, 99]);
// console.log(buf1); // <Buffer 61 62 63>

// console.log(buf1.toString());

const buf2 = Buffer.from("nodejs");

console.log(buf2);
console.log(buf2.toString());

const buf3 = Buffer.alloc(10); //创建可以存放10个字符的buffer对象.
buf3.write("abcdefghijklmn");
console.log(buf3);
