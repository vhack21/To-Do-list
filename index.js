const express = require("express");
const path = require("path");

const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("assests"));

app.get("/", function (req, res) {
  return res.render("home", {
    title: "To-Do-list",
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log(`Error on loading:${err}`);
  }
  console.log(`server is running on:${port}`);
});
