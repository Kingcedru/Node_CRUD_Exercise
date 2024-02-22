const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ItemsSchema = new schema({
  name: { type: String, required: true },
  timeStamp: { type: String, default: Date.now() },
});

const Items = mongoose.model("Items", ItemsSchema);
module.exports = Items;
