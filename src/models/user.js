const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
});

const userModel = mongoose.model("User", schema);

module.exports = userModel;
