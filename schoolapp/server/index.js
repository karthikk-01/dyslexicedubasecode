var express = require("express");
var bodyParser = require('body-parser')
var morgan = require("morgan");
const path = require('path');
var mongoose = require('mongoose');

const LoginService = require("./LoginService");
const WordService = require("./WordService");

var app = express();

app.use(morgan("combined"));
app.use(express.static(path.resolve("dist")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Mongo Db connection
mongoose.connect('mongodb://localhost:27017/schoolapp');

app.use("/api/login", LoginService);
app.use("/api/words", WordService);

app.get("*", function(req, res){
  res.sendFile(path.resolve("dist/index.html"));
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});


app.listen(process.env.PORT || 8080);
