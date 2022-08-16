function connectToDatabase() {
  const mongoose = require("mongoose");
  require("dotenv").config();

  const uri = process.env.MONGO_URL || "mongodb+srv://douglasvolcato:Rejane123@cluster0.fc9zbgi.mongodb.net/?retryWrites=true&w=majority"

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to database"));
}

module.exports = connectToDatabase;
