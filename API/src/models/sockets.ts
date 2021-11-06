

export default class Sockets {
    io: any;

    constructor( io: any ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket:any ) => {

            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data: any ) => {
                // console.log( data );
                
                this.io.emit('mensaje-from-server', data );
            });
            
        
        });
    }


}


