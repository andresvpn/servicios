__path = process.cwd()
var express = require('express');
var cors = require('cors');
var secure = require('ssl-express-www');
var app = express();
app.use(express.json());
app.enable('trust proxy');
app.set("json spaces", 2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))


///TIKTOK DOWNLOADER

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/service.html");
})


app.get("/max", (req, res) => {
  res.sendFile(__dirname + "/view/max.html");
});

app.get("/netflix", (req, res) => {
  res.sendFile(__dirname + "/view/netflix.html");
});


app.get("/payment", (req, res) => {
res.sendFile(__dirname + "/view/pago.html");
})


/////
module.exports = app