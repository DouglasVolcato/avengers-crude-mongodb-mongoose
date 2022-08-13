function connectToDatabase() {
  const mongoose = require("mongoose");

  let uri = process.env.ATLAS_URI;

  mongoose
    .connect(
      "mongodb+srv://douglasvolcato:Rejane123@cluster0.fc9zbgi.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected to database"));
}

module.exports = connectToDatabase;
