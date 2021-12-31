const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "files","1.txt");

// fs.readFile(filePath1, "utf-8", (error, data)=> {
//     if (error){
//         console.log(error);
//         return;
//     }

//     console.log(data);
// })

// 创建Promise对象.

let p1 = new Promise((resolve, reject) => {
    fs.readFile(filePath1, "utf-8", (error, data)=> {
    if (error){
        reject(error)
    }
    resolve(data);
    })
});


p1.then((data)=>{
    console.log(data)
}, (error) => {
    console.log("失败了" , error)
})