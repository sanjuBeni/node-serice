const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Hello Express JS " + req.query.name);
});

app.get("/about", (req, res) => {
  res.send("Hello, This is about page.");
});

app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(4500);
