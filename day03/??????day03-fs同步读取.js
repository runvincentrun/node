const fs = require("fs");
const path = require("path");
// 同步读取. (sync 同步)

// function readSync(fileName) {
//   let result = fs.readFileSync(path.join(__dirname, fileName));
//   return result.toString();
// }
// const result = fs.readFileSync(path.join(__dirname, "hello.txt"), "utf-8");
// console.log(result);
// console.log(readSync("hello.txt"));
// 异步读取. (async 异步)

const result = fs.readFile(
  path.join(__dirname, "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
console.log("Next");
