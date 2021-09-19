// Servidor de Express
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');
const Sockets  = require('./sockets');
const { runInThisContext } = require('vm');



class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );
        this.app.use(express.urlencoded({extended: true}));
       

        // socket configuration: realtime messages
        this.io = socketio( this.server, { /* configs */ } );
    }

    middlewares() {
        // this deploys the public directory
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );



        
        // CORS
        this.app.use( cors() );

        //routing to handle api calls
        this.app.use( '/api/teams', require('../controllers/teamsController/router/teamsRouter') );
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
        this.configurarSockets();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }

}


module.exports = Server;