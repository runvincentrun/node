const express = require("express");
const app = express();
const PORT = 8889;

app.get("/index", (req, res) => {
  console.log(req.query);
  console.log(JSON.stringify(req.query));
  res.send("首页");
});

app.get("/list", (req, res) => {
  console.log(req.query.curPage, req.query.perPage);
  res.send(req.query.curPage);
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
