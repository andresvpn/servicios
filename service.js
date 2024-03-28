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
let links = {};

// Función para acortar un enlace
function shortenLink(originalLink, customName) {
    // Verificar si el nombre personalizado ya existe
    if (customName in links) {
        return 'El nombre personalizado ya está en uso';
    }

    // Almacenar el enlace acortado
    links[customName] = originalLink;
    return `http://localhost:8080/service/${customName}`;
}

// Ruta para acortar un enlace
app.get('/shorten', (req, res) => {
    const originalLink = req.query.link;
    const customName = req.query.custom;

    const result = shortenLink(originalLink, customName);
    res.send(result);
});

// Ruta para redireccionar a la URL original
app.get('/:customName', (req, res) => {
    const customName = req.params.customName;

    // Verificar si el "cualquier nombre" existe en los enlaces acortados
    if (customName in links) {
        res.redirect(links[customName]);
    } else {
        res.status(404).send('Enlace no encontrado');
    }
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/service.html");
})

app.get("/max", (req, res) => {
  res.sendFile(__dirname + "/view/max.html");
});

app.get("/netflix", (req, res) => {
  res.sendFile(__dirname + "/view/netflix.html");
});

app.get("/gpt4", (req, res) => {
  res.sendFile(__dirname + "/view/gpt4.html");
});

app.get("/img1", (req, res) => {
  res.sendFile(__dirname + "/view/img1.html");
});


app.get("/payment", (req, res) => {
res.sendFile(__dirname + "/view/pago.html");
})


/////
module.exports = app