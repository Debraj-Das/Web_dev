const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  var name = "<h1>About Page</h1>";
  res.send(name);
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));