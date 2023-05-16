const express = require("express");
// Inicalizando app
const app = express();

// Middleware cors para permitir solicitudes de diferentes dominios
const cors = require("cors");
app.use(cors());

const path = require("path");
// Middleware que servirá los archivos estáticos desde la carpeta "public".
app.use(express.static(path.join(__dirname, "public")));
// Inicialización del servidor
app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Otro contenido html
app.get("/html/:page", (req, res) => {
  let params = req.params;
  res.sendFile(path.join(__dirname, `./public/${params.page}`));
});

const process = require('process');
// Esto capturará cualquier excepción no capturada en tu aplicación y mostrará un mensaje en la consola.
process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`);
});

// Middleware body-parser analiza el cuerpo de las solicitudes entrantes y lo convierte en un objeto JSON accesible. 
const bodyParser = require("body-parser");
// Limite el tamaño del cuerpo a 5 MB y solo analice solicitudes con el tipo de contenido "application/json". 
app.use(bodyParser.json({ limit: '5mb', type: "application/json" }));

// Carga las rutas de la aplicación
const AppRouter = require("./routers/router");
new AppRouter().loadRoutes(app);

// Inicialización del servidor
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Express running at route http://localhost:${port}`);
});