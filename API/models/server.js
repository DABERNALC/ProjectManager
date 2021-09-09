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
        
       

        // socket configuration: realtime messages
        this.io = socketio( this.server, { /* configs */ } );
    }

    middlewares() {
        // this deploys the public directory
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );



        
        // CORS
        this.app.use( cors() );

        //call to this api  example

        this.app.get('/test',(req,res)=>{
            const requestParam = req.query.parametro.split(" ");

            if(requestParam.length <2)
            {
                res.status(500).send("compa su request tiene que ser de más de 1 palabra");
            }


            res.json({
                status:"ok",
                mensaje:"hola niconi, soy una api qeu sirve jejes",
                SegundaPalabra:requestParam[1]
            });
        });
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