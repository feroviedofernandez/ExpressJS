var express = require("express");
var app = express();

var things = require("./things.js");

//Ambos archivos deben de estar en el mismo directorio
app.use("/things", things);

app.listen(3000);