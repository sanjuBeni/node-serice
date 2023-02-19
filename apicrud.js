const express = require("express");
const mongodb = require("mongodb");
const dbConnect = require("./db");

const app = express();
const routes = express.Router();

app.use(express.json());

routes.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();

  res.send(data);
});

routes.post("/", async (req, res) => {
  let db = await dbConnect();
  let data = req.body;
  // console.log(data);
  // res.send(data);
  // let insertData = await db.insertOne({
  //   name: data.name,
  //   brand: data.brand,
  //   price: data.price,
  //   category: data.category,
  // });
  let insertData = await db.insertMany(data);
  insertData.acknowledged ? res.send(data) : res.send("Data not inserted.");
  console.log(insertData);
});

routes.put("/", async (req, res) => {
  const db = await dbConnect();
  console.log(req.query);
  // res.send(req.query);
  let updateData = await db.updateOne(
    { name: "Note 2" },
    { $set: { price: req.query.price } }
  );

  updateData.acknowledged
    ? res.send("Data is update successfully")
    : res.send("Data is not updated");
});

// routes.delete("/:name/:id", async (req, res) => {
// const db = await dbConnect();
// res.send(`${req.params.name} and Id: ${req.params.id}`);
// const deleteData = await db.deleteOne({ name: req.body.name });

// deleteData.acknowledged
//   ? res.send("Data is deleted")
//   : res.send("Data is not deleted");
// console.log(req.body);
// });

// delete with id

routes.delete("/delete/:id", async (req, res) => {
  const db = await dbConnect();
  const deleteData = await db.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  console.log(req.params.id);
  res.send(deleteData);
});

app.use("/", routes);

app.listen(4500);
