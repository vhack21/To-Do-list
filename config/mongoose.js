//require the library
const mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost/task_list_db");

//acquire the connection(to check if it is succesful)
const db = mongoose.connection;

//error
db.on("err", console.error.bind(console, "error connecting to db"));

//up and running then print the messege
db.once("open", function () {
  console.log("Successfully connected to the database");
});
