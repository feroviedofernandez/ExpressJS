var express = require("Express");
var app = express();

app.get("/things/:id([0-9]{5})", function (req, res) {
    res.send("El id que has especificado es " + req.params.id);
});

app.get("*", function (req, res) {
    res.send("La dirección especificada es inválida");
});

app.listen(3000);

