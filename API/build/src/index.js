"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Server Model: Contiene todo el servidor de express + socket.io configurado
const server_1 = require("./models/server");
// Paquete para leer y establecer las variables de entorno
require("dotenv").config();
const server = new server_1.Server();
server.execute();
//# sourceMappingURL=index.js.map