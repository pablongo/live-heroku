const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  developer: Boolean,
});

module.exports = mongoose.model("User", userSchema);
