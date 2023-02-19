const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");

  const ProductSchema = new mongoose.Schema({ name: String, price: Number });
  const productModel = mongoose.model("products", ProductSchema);

  let insertData = new productModel({ name: "Wrogn", price: 500 });
  let result = await insertData.save();
  console.log(result);
};
main();
