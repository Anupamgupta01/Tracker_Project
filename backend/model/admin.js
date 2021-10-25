const mongoose = require("mongoose");

const schema = mongoose.Schema;

const adminSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("admin", adminSchema);