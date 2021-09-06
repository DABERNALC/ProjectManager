// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require("./models/server");

// Paquete para leer y establecer las variables de entorno
require("dotenv").config();
const server = new Server();
server.execute();



