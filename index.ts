import Server from "./classes/server";
import router from "./routes/router";
import cors from 'cors';
import bodyPaser from 'body-parser';

const server = new Server();

//Body Parser
server.app.use( bodyPaser.urlencoded({ extended: true}));
server.app.use( bodyPaser.json());

//Cors
server.app.use( cors({ origin: true, credentials: true}) );

//rutas de servicio
server.app.use('/', router);



server.start( ()=> {
    console.log(`servidor corriendo en el puerto ${server.port}`);
});