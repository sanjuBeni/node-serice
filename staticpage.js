const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, res) => {
  const user = {
    name: "Pratiksh Beniwal",
    city: "Hisar",
    skills: ["Python", "JS", "MERN", "PHP"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/404.html`);
});

app.listen(4500);
