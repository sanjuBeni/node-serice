const express = require("express");
const filterAge = require("./middleware/filter");

const app = express();

const routes = express.Router();

// const middle = (req, res, next) => {
//   //   console.log("Middleware");
//   if (!req.query.age) {
//     res.send("Please enter age...");
//   } else if (req.query.age < 18) {
//     res.send("You cann't access this page.");
//   } else {
//     next();
//   }
// };

// app.use(filterAge); // This middleware apply on all routes

routes.use(filterAge); // this middleware apply on specific route

app.get("/", (req, res) => {
  // req.query
  res.send("This is home page");
});

app.get("/users", (req, res) => {
  res.send("This is user page");
});

routes.get("/contact", (req, res) => {
  res.send("This is contact page");
});

routes.get("/about", (req, res) => {
  res.send("This is about page");
});

app.use("/", routes);
app.listen(4500);
