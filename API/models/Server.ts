// Servidor de Express
import express from "express";
const http     = require('http');
import * as socketio from 'socket.io';
const path     = require('path');
const cors     = require('cors');
const Sockets  = require('./sockets');
import {router}  from "../controllers/teamsController/router/teamsRouter";


export class Server {
    app: any;
    port: string;
    server: any;
    io: any;

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );
        this.app.use(express.urlencoded({extended: true}));
       

        // socket configuration: realtime messages
        // this.io = socketio( this.server );
    }

    middlewares() {
        // this deploys the public directory
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );



        
        // CORS
        this.app.use( cors() );

        //routing to handle api calls
        this.app.use( '/api/teams', router );
    }

    // Esta configuración se puede tener aquí o como propieda de clase
    // depende mucho de lo que necesites
    configurarSockets() {
        new Sockets( this.io );
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        // this.configurarSockets();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }

}


