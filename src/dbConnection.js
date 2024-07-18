const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_DB;

async function connectToDb() {
  if (!mongoURI) {
    console.error("Mongo URI not found in environment variables");
    process.exit(1);
  }
  await mongoose.connect(mongoURI);
  console.log("Connected to MongoDB using Mongoose");
}

module.exports = { connectToDb };
