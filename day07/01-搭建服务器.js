const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8081;

async function readFilex(path) {
  let content = await readFile(path, "utf-8", (error, data) => {
    if (error) throw error;
    return data;
  });
  return content;
}

const server = http.createServer((req, res) => {
  let reqUrl = req.url;
  if (reqUrl == "/" || reqUrl == "/index.html") {
    let filePath = path.join(__dirname, "jQuery", "index.html");
    let content = fs.readFileSync(filePath);
    res.end(content);
  } else if (reqUrl == "/detail.html") {
    let filePath = path.join(__dirname, "html", "detail.html");
    let content = fs.readFileSync(filePath);
    res.end(content);
  } else if (reqUrl == "/jquery.min.js") {
    let filePath = path.join(
      __dirname,
      "jQuery",
      "node_modules",
      "jquery",
      "dist",
      "jquery.min.js"
    );
    let content = fs.readFileSync(filePath);
    res.end(content);
  } else if (reqUrl.endsWith(".css")) {
    let filePath = path.join(__dirname, "css", "index.css");
    let content = fs.readFileSync(filePath);
    res.end(content);
  } else if (reqUrl == "/ajax") {
    let result = "请求成功.";
    res.end(result);
  } else if (reqUrl == "/login.html") {
    let filePath = path.join(__dirname, "html", "login.html");
    let content = fs.readFileSync(filePath);
    res.end(content);
  } else if (reqUrl == "/login_post") {
    let token = { username: "jian", password: "5527163" };
    req.on("data", (data) => {
      let values = JSON.parse(data.toString());
      let { username, password } = values;
      if (username == token.username && password == token.password) {
        res.end("Successfully Logged In.");
      } else {
        res.end("Not logged IN");
      }
    });
  } else if (reqUrl.endsWith("data")) {
    res.end("Hello world!");
  } else {
    res.setHeader("Content-type", "text/html;charset=utf-8");
    res.end("404错误: 找不到资源.");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Successfully running on ${PORT}`);
});
