// 引进http模块
const http = require("http");
// 设置端口
const port = 8080;
const url = require("url");
// 调用http模块创建服务器对象.
const server = http.createServer((req, res) => {
    // res.write("Haha");
    // res.write(req.method + "\n");
    // const a = url.parse(req.url, true);
    // console.log(a);
    // console.log(req.method);
    // res.write(req.)
    // res.end(req.url);
    // res.end("Working");
});

// 调用监听
server.listen(port, error => {if (error) console.log(error); console.log(`Server is running at port ${port}`)});