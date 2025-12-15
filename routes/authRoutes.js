const express = require("express");
const router = express.Router();

console.log("✅ authRoutes file loaded");

const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/authController");

router.post("/register", registerAdmin); // one time
router.post("/login", loginAdmin);

module.exports = router;
