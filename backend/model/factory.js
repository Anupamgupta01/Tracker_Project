const mongoose = require("mongoose");

const schema = mongoose.Schema;

const factorySchema = new schema({
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
  factoryId: {
    type: String,
    require: true,
  },
  isAssigned: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    required: false,
  },
  onDate: {
    type: Date,
    required: false,
  },
  ngoName: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("factory", factorySchema);
