const fs = require("fs");
const path = require("path");
fs.writeFile(
  path.join(__dirname, "hello.txt"),
  "Yesterday you said tomorrow.",
  (error) => {
    if (error) throw error;
    console.log("The file has been saved.");
  }
);
