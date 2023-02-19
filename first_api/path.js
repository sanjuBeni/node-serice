// const fs = require("fs");
// const path = require("path");

// const dirPath = path.join(__dirname, "file");

// for (let i = 1; i <= 5; i++) {
//   fs.writeFileSync(`${dirPath}/hello${i}.txt`, `This is file ${i}`);
// }

// fs.appendFile(`${dirPath}/hello1.txt`, " now we can update file.", (err) => {
//   !err ? console.log("file updated") : "";
// });

// fs.readFile(`${dirPath}/hello1.txt`, { encoding: "utf-8" }, (err, files) => {
//   if (!err) {
//     console.log(files);
//   }
// });

// console.log(dirPath);

let a = 10;
let b = 0;

const waitingRes = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 20;
    resolve(b);
  }, 1000);
});

waitingRes.then((b) => {
  console.log(a + b);
});
