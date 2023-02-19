const express = require("express");

// File Upload with the help of `Multer Package`

const multer = require("multer");

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      // cb is call back function
      cb(null, "files"); // files is folder where file is store
    },
    filename: (req, res, cb) => {
      cb(null, `${res.fieldname}-${Date.now()}.jpg`); // fieldname is user_file name
    },
  }),
}).single("user_file"); // user_file is file name that gien in API

app.post("/file", upload, (req, res) => {
  res.send("File Upload");
});

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, "files");
    },
    filename: (req, res, cb) => {
      cb(null, `${res.fieldname}-${Date.now()}.png`);
    },
  }),
}).single("file_name");

app.post("/fileupload", fileUpload, (req, res) => {
  res.send("File is upload");
});

// const os = require("os");
// console.log(os.totalmem() / (1024 * 1024 * 1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());
app.listen(4500);
