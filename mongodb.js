const mongodb = require("./db");
const express = require("express");

const app = express();

const fetchData = async () => {
  let res = await mongodb();
  let result = await res.find().toArray();
  console.log(result);
};

app.get("/", (req, res) => {
  res.send(fetchData());
});

app.listen(4500);
// fetchData();
