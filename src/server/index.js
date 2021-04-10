var path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

//secure the API_KEY IN another env file
dotenv.config();

//initializing the app
const app = express();

app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname);

//sending the html page response
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

//designates what port the app will listen to for incoming requests
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

app.post("/dataApi", (req, res) => {
  //reseving the user input from client-side
  const apiInfo = req.body.url;
  console.log(apiInfo);

  //then making the full apiUrl
  const apiAdress = "https://api.meaningcloud.com/sentiment-2.1?";
  const key = process.env.API_KEY;
  const lang = "en";
  const model = "general";
  const apiUrl = `${apiAdress}key=${key}&url=${apiInfo}&lang=${lang}&model=${model}`;

  //and finally sending the data to the client-side again
  fetch(apiUrl)
    .then((info) => {
      return info.json();
    })
    .then((resopnse) => {
      res.send(resopnse);
    });
});
