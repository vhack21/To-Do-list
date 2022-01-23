const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  Description: {
    type: String,
    require: true,
  },
  DateofC: {
    type: String,
    required: true,
  },
  timeofC: {
    type: String,
    required: true,
  },
  typeofC: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
