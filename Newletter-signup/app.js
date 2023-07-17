const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const request = require("request");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const data = `Name ${firstName} ${lastName} and email ${email}`;
  console.log(data);
  res.send(`<h1> ${data} </h1>`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
