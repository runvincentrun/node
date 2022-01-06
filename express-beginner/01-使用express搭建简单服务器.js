const express = require("express");
const app = express();
const PORT = 8889;

app.get("/", (req, res) => {
  res.send("Welcome to the Homepage");
});

app.listen(PORT, () => {
  console.log(`Service is running on PORT: ${PORT}.`);
});
