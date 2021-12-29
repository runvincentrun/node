const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8080;
const server = http.createServer((req, res) => {
  let reqUrl = req.url;
  if (reqUrl == "/" || reqUrl == "/index.html") {
    console.log("HOME");
    let filePath = path.join(__dirname, "assets", "html", "index.html");
    let content = fs.readFileSync(filePath);
    res.end(content);
  } else if (reqUrl.endsWith(".css")) {
    console.log("css");
    let filePath = path.join(__dirname, "assets", "css", "index.css");
    let content = fs.readFileSync(filePath);
    res.end(content);
  } else if (reqUrl != "/") {
    console.log("//////!=");
    let filePath = path.join(__dirname, "assets", "html", "error.html");
    let content = fs.readFileSync(filePath);
    res.end(content);
  }

  req.on("data", (sth) => {
    console.log(sth.toString());
    res.end("Received");
  });
});

server.listen(port, () => {
  console.log(`server is currently running on ${port}.`);
});
