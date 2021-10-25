const mongoose = require("mongoose");

const schema = mongoose.Schema;

const publicSchema = new schema({
  mobileNo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("public", publicSchema);
