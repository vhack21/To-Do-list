const express = require("express");
const path = require("path");

const port = 8000;
const app = express();

const db = require("./config/mongoose");
const Task = require("./models/tasks");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.set("views", path.join(__dirname, "views"));
app.use(express.static("assests"));

app.get("/", function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("Error in fetching db");
      return;
    }
    return res.render("home", {
      title: "My task list",
      task_list: tasks,
    });
  });
});

app.post("/create-task", function (req, res) {
  Task.create(
    {
      Description: req.body.descrip,
      DateofC: req.body.date,
      timeofC: req.body.time,
      typeofC: req.body.type,
    },
    function (err, newTask) {
      if (err) {
        console.log("error in creating task");
        return;
      }
      console.log("*****", newTask);
      return res.redirect("back");
    }
  );
});
app.get("/delete-task", function (req, res) {
  console.log(req.query);
  let id = req.query.id;
  Task.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("error in deleting task");
      return;
    }
    return res.redirect("back");
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log(`Error on loading:${err}`);
  }
  console.log(`server is running on:${port}`);
});
