
const path = require("path")
__path = process.cwd()
var express = require("express");
const  axios = require("axios")
var router = express.Router();
var fs = require("fs");
var util = require("util");
var FormData = require("form-data");
var fetch = require("node-fetch");
//------DOWNLOAD------\\



//videos//descargas

router.get('/video-edit3', (req, res) => {
    const videoPath = path.join(__dirname, 'videos', 'edit.mp4');
    res.sendFile(videoPath);
});


module.exports = router

