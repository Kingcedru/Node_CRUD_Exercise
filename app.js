const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://byishimocedrick:node_exercise@cluster0.cnsuu9p.mongodb.net/"
  )
  .then(() => console.log("connected to database"))
  .catch(console.error());

const Items = require("./models/items");

const app = express();
app.use(bodyParser.json());

app.get("/items", async (req, res) => {
  const items = await Items.find();
  res.json(items);
});

app.post("/items", (req, res) => {
  const item = new Items({
    id: req.body.id,
    name: req.body.name,
  });
  item.save();
  res.json(item);
});

app.listen(3000, () => {
  console.log("listening");
});
