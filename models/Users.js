const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
    },
    vehicle: {
      type: String,
      required: true ,
      unique: true
    },
    incExpDate: {
      type: Date,
      required: true
    },
    pucExpDate: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
