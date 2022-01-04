const express = require("express");
const app = express();
const PORT = 8088;
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`端口: ${PORT}, 运行中......`);
});
