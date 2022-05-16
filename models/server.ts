import express, { Application } from 'express';
import CLIENTES_Routes from '../routes/CLIENTES';
import test_Routes from '../routes/test';
import cors from 'cors';
import db from '../db/connection';

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));

class Server {

    private app: Application;
    private port: string ;
    private apiPaths = {
        CLIENTES: '/api/CLIENTES',
        TEST: '/api',
    }

    constructor() {
        this.app = express();
        this.port = config.PORT || '8000';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    // TODO: Conectar a base de datos
    async dbConnection() {
        try {

            await db.authenticate();
            console.log('Database online');
            
        } catch (error) {
            // throw new Error( error );
            console.log(error);
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json({ limit: '50mb' }) );

        // Carpeta pública
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.apiPaths.CLIENTES, CLIENTES_Routes );
        this.app.use( this.apiPaths.TEST, test_Routes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

export default Server;