let fs = require("fs");
let path = require("path");
// function a(a, b) {
// 	return a + b;
// }

// let ret1 = a(1, 2);
// let ret2 = a(2, 2);
// let ret3 = a(3, 2);

function a(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, "utf-8", (error, data) => {
			if (error) {
				reject(error);
			}
			resolve(data);
		});
	});
}
let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");

async function b() {
	let data1 = await a(filePath1);
	let data2 = await a(filePath2);
	let data3 = await a(filePath3);
	console.log(data1 + data2 + data3);
}

b();
