const User = require("../models/Users");

// Create User
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyPattern?.vehicle) {
        return res.status(409).json({ message: "Vehicle already registered" });
      }
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get Single User
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// Update User
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// Delete User
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
