const express = require("express");

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
require('dotenv').config();


const connectDB = require("./config/db");

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("User Management Backend Running ");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

