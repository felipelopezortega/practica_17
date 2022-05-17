var express = require("express"); //importamos la dependencia
var app = express (); //declaramos una App de Express
var port = process.env.PORT || 3000; //setteamos el puerto para que escuche al servidor
app.use("/assets",express.static(__dirname + "/public"));

app.set("view engine", "ejs"); // Aquí se especifica a nuestra App que su template será EJS

app.use("/", function(req, res, next){

    console.log("Request Url:" + req.url);
    next();
});

//primera ruta (está al nivel de la raíz/), Hello World!
app.get("/", function(req, res){

    res.render("index");
});


//segunda ruta, recibe un parámetro (en este caso, un número)
app.get("/paroimpar/:numero", function(req, res){

    res.render("numero", {NUMBER: req.params.numero});
});

app.listen(port); //levantar el server y ponerlo a la escucha
