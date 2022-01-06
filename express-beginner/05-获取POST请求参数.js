const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.urlencoded());
// app.use(express.json());

const PORT = 8889;
app.all("/register", (req, res) => {
  if (req.method == "POST") {
    const { username, email, password, repassword } = req.body;
    // res.send("POST");
    res.redirect("/login");
  } else {
    let filePath = path.join(__dirname, "views", "register.html");
    let content = fs.readFileSync(filePath, "utf-8");
    res.send(content);
  }
});

app.get("/login", (req, res) => {
  let filePath = path.join(__dirname, "views", "login.html");
  let content = fs.readFileSync(filePath, "utf-8");
  res.send(content);
});
app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Welcome to the Homepage - 处理POST请求");
});

app.listen(PORT, () => {
  console.log(`Service is running on PORT: ${PORT}.`);
});
