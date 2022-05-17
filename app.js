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

const { MongoClient, ServerApiVersion } = require("mongodb"); // Iinyectando dependencias de mongo
const uri = //Incluimos el enlace de conexion
  "mongodb+srv://felipe:2336915457@cluster0.xgnn0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
}); //generamos el clinete
client
  .connect() //Nos conectamos a la base de datos
  .then(() => {
    console.log("Connected to the database "); // si la conexion es valida mandamos el mensaje
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`); // Si no se puede conectar mandamos el error
  });

app.listen(port); //levantar el server y ponerlo a la escucha
