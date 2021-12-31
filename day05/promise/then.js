const fs = require("fs");
const path = require("path");

const filePath1 = path.join(__dirname, "files", "1.txt");
function func(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, "utf-8", (error, data) => {
			if (error) reject();

			resolve(data);
		});
	});
}
let p1 = func(filePath1);
let str = "";
("");
p1.then(
	// 成功
	(data) => {
		str += data;
		let filePath2 = path.join(__dirname, "files", "2.txt");
		return func(filePath2);
	},
	// 失败
	(error) => {
		console.log("第一次失败了.");
	}
)
	.then(
		// 第二次成功.
		(data) => {
			str += data;
			let filePath3 = path.join(__dirname, "files", "3.txt");
			return func(filePath3);
		},
		// 第二次失败
		(error) => {
			console.log("第二次失败了.");
		}
	)
	.then(
		//
		// 第3次成功.
		(data) => {
			str += data;
			console.log(str);
		},
		// 第二次失败
		(error) => {
			console.log("第三次失败了.");
		}
	);
