const mongoose = require("mongoose");

const AvengerSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  character: { type: String, required: true },
  realName: { type: String, required: true },
  joinedIn: { type: String, required: true },
  image: { type: String, required: true },
  notes: { type: String, required: true },
});

const AvengerModel = new mongoose.model("avengers", AvengerSchema);

module.exports = AvengerModel;
