const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ngoSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  ngoId: {
    type: String,
    require: true,
  },
  assignedFactoryId: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  dateOn: {
    type: Date,
    required: false,
  },
  isAssigned: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("ngo", ngoSchema);
