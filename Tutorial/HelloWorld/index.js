var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send("Hello World!");
});

console.log("Llamando a app.listen().");

var server = app.listen(3000, function (){
    console.log("Llamada a la función callback.");
    var port = server.address().port;
    console.log('Aplicación escuchando en el puerto %s', port);
  });

console.log("app.listen() ejecutado.");