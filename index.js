const fs = require("fs")
const express = require('express');
const cors = require('cors');
const path = require('path')
var secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000


var service = require('./service')
var api = require('./routes/api')
const app = express();

app.use(express.json());

app.enable('trust proxy');
app.set("json spaces", 2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))
app.use('/service', service)
app.use('/api', api)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "bio.html"));
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "view", "error404.html"));
});

app.listen(PORT, () => {
     const { GREEN, BLUE, RED, WHITE } = require('./lib/color.js');
     console.log(`${BLUE}SERVIDOR FUNCIONANDO EN PUERTO:` + PORT + `${WHITE}`)
});
