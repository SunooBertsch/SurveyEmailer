const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
app.get("/bye", (req, res) => {
  res.send({ hello: "hello" });
});
app.listen(5000);
