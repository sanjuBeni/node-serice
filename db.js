const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbConnect = async () => {
  const conn = await client.connect();

  const db = conn.db("e-comm");
  return db.collection("products");
};

module.exports = dbConnect;
// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((result) => {
//       console.log(result);
//     });
// });

// console.log(dbConnect());
