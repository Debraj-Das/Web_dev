const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const request = require("request");

app.get("/", (req, res) => {
  res.send("Project is running");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
