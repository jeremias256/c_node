const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

//todo boilerplate const [, , arg3 = 'base=5'] = process.argv;
//todo boilerplate const [, base = 'base=5'] = arg3.split('=');

const ejecutar = async (base, listar, hasta) => {
	try {
		let nombreArchivo = await crearArchivo(base, listar, hasta);
		console.log(nombreArchivo.america);
	} catch (err) {
		throw err;
	}
};
ejecutar(argv.b, argv.l, argv.h);
