const mongoose = require("mongoose");

const userSchemaDef = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model("User", userSchemaDef);

module.export = { User }
