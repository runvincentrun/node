const fs = require("fs");
const path = require("path");
// console.log(__dirname);
// const directoryPath = path.join("__dirname", "");

fs.readdir(__dirname, (err, data) => {
  if (err) throw err;
  for (let item of data) {
    if (item.endsWith(".js")) {
      fs.rename(
        path.join(__dirname, item),
        path.join(__dirname, "day03-" + item),
        (err) => {
          if (err) throw err;
        }
      );
    }
  }
});

// fs.rename("buffer.js", "day03-buffer.js", (err) => {
//   if (err) throw err;
// });
