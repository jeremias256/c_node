const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usuariosPath = '/api/usuarios';

		//Conectar a la bd

		this.conectarDB();

		// Middlewares
		this.middlewares();
		// Rutas de mi aplicación
		this.routes();
	}

	//SEGUN EL process.env.PORT puedo elegir entre base de desa o prod
	async conectarDB() {
		await dbConnection();
	}

	middlewares() {
		// CORS
		this.app.use(cors());
		// Lectura y parseo del body
		this.app.use(express.json());
		// Directorio Público
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use(this.usuariosPath, require('../routes/usuarios'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor corriendo en puerto', this.port);
		});
	}
}
module.exports = Server;

/* ---------------------------------------------------------------------------------------------- */
/*                                             IMPORT                                             */
/* ---------------------------------------------------------------------------------------------- */
// import express from 'express';
// import cors from 'cors';
// import usuariosRouter from '../routes/usuarios.js';

// import { dbConnection } from '../database/config';

// class Server {
// 	constructor() {
// 		this.app = express();
// 		this.port = process.env.PORT || 3000;
// 		this.usuariosPath = '/api/usuarios';
// 		// Middlewares
// 		this.middlewares();
// 		// Rutas de mi aplicación
// 		this.routes();
// 	}

// 	async conectarDB() {
// 		await dbConnection();
// 	}

// 	middlewares() {
// 		// CORS
// 		this.app.use(cors());
// 		// Lectura y parseo del body
// 		this.app.use(express.json());
// 		// Directorio Público
// 		this.app.use(express.static('public'));
// 	}
// 	routes() {
// 		this.app.use(this.usuariosPath, usuariosRouter);
// 	}
// 	listen() {
// 		this.app.listen(this.port, () => {
// 			console.log('Servidor corriendo en puerto', this.port);
// 		});
// 	}
// }

// export default Server;
