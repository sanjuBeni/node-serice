// const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// const ProductSchema = new mongoose.Schema({
//   name: String,
//   brand: String,
//   price: Number,
//   category: String,
// });

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("products", ProductSchema);
