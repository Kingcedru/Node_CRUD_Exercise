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
  if (!items) {
    const error = new Error("Not Found");
    error.status = 404;
    throw error;
  }
  res.json(items).status(200);
});

app.post("/items", (req, res) => {
  const item = new Items({
    id: req.body.id,
    name: req.body.name,
  });
  item.save();
  res.json(item);
});

app.get("/items/:id", async (req, res) => {
  const item = await Items.findById(req.params.id);
  res.json(item);
});

app.put("/items/:id", async (req, res) => {
  const item = await Items.findById(req.params.id);
  if (!item) {
    const error = new Error("Not Found");
    error.status = 404;
    throw error;
  }
  item.name = req.body.name;
  item.save();
  res.json(item).status(200);
});

app.delete("/items/:id", async (req, res) => {
  const deleted = await Items.findByIdAndDelete(req.params.id);
  res.json({ deleted });
});

// app.use((err, req, res, next) => {
//   res.status(err.status || 500).json({
//     error: {
//       message: err.message || "Internal Server Error",
//     },
//   });
// });

app.listen(3000, () => {
  console.log("listening");
});
