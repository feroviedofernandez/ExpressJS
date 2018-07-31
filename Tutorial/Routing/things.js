var express = require("Express");
var router = express.Router();

router.get("/", function (req, res) {
    res.send("Ruta GET de things.js");
});

router.post("/", function (req, res) {
    res.send("Ruta POST de things.js");
});

//Exportamos el router para usarlo en nuestro index.js
module.exports = router;



