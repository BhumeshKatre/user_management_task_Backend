const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// 🔗 Connect Database
connectDB();

// 🔐 Middlewares
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://polution-under-control-user-managemen.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

app.use(express.json());

// 🏠 Root Route
app.get("/", (req, res) => {
  res.send("User Management Backend Running 🚀");
});

// 🔀 API Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// ❌ 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
