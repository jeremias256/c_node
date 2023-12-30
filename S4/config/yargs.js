const argv = require('yargs')
	.option('b', {
		alias: 'base',
		demandOption: true,
		describe: 'Es la base de la tabla de multiplicar',
		type: 'number',
	})
	.option('l', {
		alias: 'listar',
		default: false,
		describe: 'Muestra la tabla creada en consola',
		type: 'boolean',
	})
	.option('h', {
		alias: 'hasta',
		default: 10,
		type: 'number',
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw 'La base tiene que ser un num';
		}
		return true;
	}).argv;

module.exports = argv;
