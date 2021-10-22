"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
// Servidor de Express
const express_1 = __importDefault(require("express"));
const http = require('http');
const path = require('path');
const cors = require('cors');
const Sockets = require('./sockets');
const teamsRouter_1 = require("../controllers/teamsController/router/teamsRouter");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        // Http server
        this.server = http.createServer(this.app);
        this.app.use(express_1.default.urlencoded({ extended: true }));
        // socket configuration: realtime messages
        // this.io = socketio( this.server );
    }
    middlewares() {
        // this deploys the public directory
        this.app.use(express_1.default.static(path.resolve(__dirname, '../public')));
        // CORS
        this.app.use(cors());
        //routing to handle api calls
        this.app.use('/api/teams', teamsRouter_1.router);
    }
    // Esta configuración se puede tener aquí o como propieda de clase
    // depende mucho de lo que necesites
    configurarSockets() {
        new Sockets(this.io);
    }
    execute() {
        // Inicializar Middlewares
        this.middlewares();
        // Inicializar sockets
        // this.configurarSockets();
        // Inicializar Server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto:', this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map