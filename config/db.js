const mongoose = require("mongoose");
const url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
