const express = require("express");
const { EventEmitter } = require("events");

const app = express();
const event = new EventEmitter();

let count = 0;
event.on("eventName", () => {
  //   console.log("Event is on");
  count++;
  console.log("Request is ", count);
});

app.get("/", (req, res) => {
  res.send("Home Request");
  event.emit("eventName");
});
app.get("/update", (req, res) => {
  res.send("update Request");
  event.emit("eventName");
});
app.get("/delete", (req, res) => {
  res.send("delete Request");
  event.emit("eventName");
});
app.get("/search", (req, res) => {
  res.send("search Request");
  event.emit("eventName");
});

app.listen(4500);
