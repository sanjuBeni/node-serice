const http = require("http");
const color = require("colors");

http
  .createServer((req, res) => {
    // console.log("Server Run");
    res.write("<h1>This is node js server</h1>");
    res.end();
  })
  .listen(4000, () => {
    console.log(4000 + " Port is start.");
  });

console.log(color.bgCyan("Hello Data"));
