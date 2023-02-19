const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const insertData = async () => {
  const productModel = mongoose.model("products", ProductSchema);

  let insertData = new productModel({
    name: "Mac Pro",
    brand: "Apple",
    price: 1500,
    category: "Tabs",
  });
  let result = await insertData.save();
  console.log(result);
};
// insertData();

const updateData = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);

  let updataData = await ProductModel.updateOne(
    { name: "Mac Pro" },
    { $set: { price: 2099 } }
  );
  console.log(updataData);
};

// updateData();

const deleteData = async () => {
  const productModel = mongoose.model("products", ProductSchema);

  let deleteData = await productModel.deleteMany({ name: "Wrogn" });
  //   let result = await deleteData.delete();
  console.log(deleteData);
};
// deleteData();

const readData = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);

  let res = await ProductModel.find();

  console.log(res);
};

readData();
