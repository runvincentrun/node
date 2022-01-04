const express = require("express");
const app = express();
const PORT = 8089;
app.get("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello Ajax");
});

app.all("/server", (req, res) => {
  console.log(req);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.send("Finish");
});
app.get("/server/json", (req, res) => {
  let a = {
    name: "Vincent",
    age: 25,
  };
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(JSON.stringify(a));
});

app.get("/json-timeout", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(function () {
    res.send("TIMEOUT");
  }, 1900);
});
app.listen(PORT, () => {
  console.log(`${PORT}端口运行中...`);
});
