// require('dotenv').config();
// const Server = require('./models/server');
// const server = new Server();

// server.listen();

/* ---------------------------------------------------------------------------------------------- */
/*                                             IMPORTS                                            */
/* ---------------------------------------------------------------------------------------------- */
import dotenv from 'dotenv';
dotenv.config();

import Server from './models/server.js';

const server = new Server();
server.listen();
