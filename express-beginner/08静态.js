const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 8889;
app.use(express.static("static"));
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.send("Welcome to the Homepage");
});

app.get("/login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let filePath = path.join(__dirname, "views", "login.html");
  let content = fs.readFileSync(filePath, "utf-8");
  res.send(content);
});

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

app.listen(PORT, () => {
  console.log(`Service is running on PORT: ${PORT}.`);
});
