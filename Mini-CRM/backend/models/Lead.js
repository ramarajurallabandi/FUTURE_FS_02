const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String
});

module.exports = mongoose.model("Lead", leadSchema);
