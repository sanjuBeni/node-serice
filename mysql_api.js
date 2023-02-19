const mysql = require("mysql");
const express = require("express");

const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

connection.connect((err) => {
  err ? console.log(err) : console.log("connect built");
});

// connection.query("select * from user", (err, res) => {
//   !err ? console.log(res) : console.log(err);
// });

app.get("/", (req, res) => {
  connection.query("select * from user", (err, result) => {
    !err ? res.send(result) : err;
  });
});

app.post("/", (req, res) => {
  connection.query(
    "INSERT INTO user SET ?",
    req.body,
    (err, result, fields) => {
      !err ? res.send(result) : res.send(err);
    }
  );
});

app.put("/", (req, res) => {
  const data = [req.body.name, req.body.email, req.body.id];
  connection.query(
    "UPDATE user SET name = ?, email = ? WHERE id = ?",
    data,
    (err, result, fields) => {
      !err ? res.send(result) : res.send(err);
    }
  );
});

app.delete("/:id", (req, res) => {
  connection.query(
    "DELETE from user where id = ?",
    req.params.id,
    (err, result, fields) => {
      !err ? res.send(result) : res.send(err);
    }
  );
});

app.listen(4500);
