const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = 8889;

app.get("/register", (req, res) => {
  let filePath = path.join(__dirname, "views", "register.html");
  let content = fs.readFileSync(filePath, "utf-8");

  res.send(content);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Homepage - 处理Get请求");
});

app.listen(PORT, () => {
  console.log(`Service is running on PORT: ${PORT}.`);
});
