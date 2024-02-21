const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://byishimocedrick:node_exercise@cluster0.cnsuu9p.mongodb.net/"
);

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("listening");
});
