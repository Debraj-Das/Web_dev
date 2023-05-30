const express = require("express");
const app = express();
const port = 3000;

const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("Hello World,\n nice to meet all of you");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const appId = "eae510de7223ebed001b29166ffc211a";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appId +
    "&units=metric#";

  //
  https.get(url, (response) => {
    console.log(response.statusMessage);
    response.on("data", (data) => {
      // data variable store the data in the form of hexa decimal(json format) and we need to convert it into javascript object
      const weatherData = JSON.parse(data);
      // weatherData is a javascript object and we can access its properties by like object.property
      const discription = weatherData.weather[0].description;
      // console.log(discription);
      const temp = weatherData.main.temp;

      res.write(
        "<h1> The temperature in " +
          query +
          " is " +
          temp +
          " degree celcius </h1>"
      );
      // res.write("<h2> The weather is currently " + discription + "</h2>");

      const icon = weatherData.weather[0].icon;
      const img = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write('<img src="' + img + '" alt="nice weather pic" >');
      res.write("<h2> " + discription + "</h2>");
      res.send();
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// var s =
//   "<h1> The weather is currently " +
//   discription +
//   ". \tThe temperature in London is " +
//   temp +
//   " degree celcius </h1>";
