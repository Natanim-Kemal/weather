const express = require("express");
const https = require("https");

const app = express();
app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=paris&units=metrics&appid=0d9e9bfeeb7a5bddcf861fd055142bee";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDesciption = weatherData.weather[0].description;
      const imageURL = weatherData.weather[0].icon;
      
      res.write("<h1>The weather is currently " + weatherDesciption + "</h1>");
      res.write(
        "<h2>The temprature in london is " + temp + " degrees Celcius.</h2>"
      );
      res.write("<img src=" + imageURL + ".jpg>");
      res.send();
    });
  });
});

app.listen(3000) s;


