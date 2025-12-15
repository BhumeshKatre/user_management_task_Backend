const User = require("../models/Users");

// Create User
exports.createUser = async (req, res) => {
  // const { name, phone, vehicle, incExpDate, pucExpDate } = req.body;
  // console.log(name, phone , incExpDate , pucExpDate, vehicle);
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
  const user = await User.findByIdAndUpdate(req.params._id, req.body, {
    new: true
  });
  res.json(user);
};

// Delete User                    
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
