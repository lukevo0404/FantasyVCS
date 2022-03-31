const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    id: String,
    name: String,
    nationalID: String,
    phoneNumber: String,
    workPlace: String,
    username: String,
    email: String,
    password: String,
    role: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
