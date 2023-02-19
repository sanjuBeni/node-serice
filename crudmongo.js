const dbConnect = require("./db");

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// const dbConnect = async () => {
//   const conn = await client.connect();
//   const db = conn.db("e-comm");
//   return db.collection("products");
// };

const insertData = async () => {
  const db = await dbConnect();
  const insert = await db.insertMany([
    { name: "max 1", brand: "oppo", price: 400, category: "Mobile" },
    { name: "max 2", brand: "oppo", price: 400, category: "Mobile" },
    { name: "max 2", brand: "oppo", price: 400, category: "Mobile" },
    { name: "max 3", brand: "oppo", price: 400, category: "Mobile" },
  ]);
  insert.acknowledged
    ? console.log("Data inserted successfully.")
    : console.log("Data not inserted.");
};

// insertData();\

const updateData = async () => {
  const db = await dbConnect();
  //   const updateMany = await db.updateMany(
  //     { name: "max 1" },
  //     { $set: { name: "max 1.1", price: 450 } }
  //   );
  const update = await db.updateOne(
    { name: "max 1" },
    { $set: { name: "max 2", price: 450 } }
  );
  update.acknowledged
    ? console.log("Data updated successfully.")
    : console.log("Data not updated.");
};

// updateData();

const deleteData = async () => {
  const db = await dbConnect();
  const deleteRec = await db.deleteMany({ name: "max 1.1" });
  deleteRec.acknowledged
    ? console.log("Data deleted successfully.")
    : console.log("Data not deleted.");
};
// deleteData();
