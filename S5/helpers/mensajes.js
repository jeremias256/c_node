require('colors');

const mostrarMenu = () => {
	console.clear();
	console.log('==========================='.red);
	console.log('Seleccione una opción');
	console.log('=========================== \n'.red);

	console.log(`${'1'.red}. Crear una tarea`);
	console.log(`${'2'.red}. Listar tarea(s)`);
	console.log(`${'3'.red}. Listar tarea(s) completadas`);
	console.log(`${'4'.red}. Listar tarea(s) pendientes`);
	console.log(`${'5'.red}. Completar tarea(s)`);
	console.log(`${'6'.red}. Borrar tarea`);
	console.log(`${'0'.red}. Salir \n`);

	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	readline.question('Seleccione una opción: ', (opt) => {
		readline.close();
	});
};

const pause = () => {
	return new Promise((resolve) => {
		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question(`\nPresion ${'ENTER'.red} para continuar\n`, (opt) => {
			readline.close();
			resolve();
		});
	});
};

module.exports = {
	mostrarMenu,
	pause,
};
