const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  console.log(num1 + num2);
  res.send("The result of the calculation is " + (num1 + num2));
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
