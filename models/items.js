const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");
const schema = mongoose.Schema;

const ItemSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  timeStamp: { type: String, default: Date.now() },
});
