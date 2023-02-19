const express = require("express");
const Products = require("./products");
require("./config");

const app = express();
const routes = express.Router();

app.use(express.json());
routes.post("/create", async (req, res) => {
  const data = req.body;
  const insertData = new Products(data);

  let result = await insertData.save();
  console.log(result);
  console.log(data);
  res.send(result);
});

routes.get("/find", async (req, res) => {
  let result = await Products.find();

  res.send(result);
});

routes.delete("/delete/:_id", async (req, res) => {
  //   let id = req.params;
  console.log(req.params);
  let deleteData = await Products.deleteOne(req.params);
  res.send(deleteData);
});

routes.put("/update/:_id", async (req, res) => {
  let updateData = await Products.updateOne(req.params, {
    $set: req.body,
  });

  res.send(updateData);
});

routes.get("/search/:key", async (req, res) => {
  let searchData = await Products.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });

  res.send(searchData);
});

app.use("/", routes);

app.listen(5000);
