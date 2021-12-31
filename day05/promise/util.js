const fs = require("fs");

const path = require("path");

const util = require("util");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
util.promisify(fs.readFile);
function readFilePromise(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, "utf-8", (error, data) => {
			if (error) reject(error);
			resolve(data);
		});
	});
}

readFilePromise(filePath1).then();
