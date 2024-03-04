require('colors');
//INFX esto fue una manera manual
//const { mostrarMenu, pause } = require('./helpers/mensajes');
const { inquirerMenu } = require('./helpers/inquirer');

console.clear();

const main = async () => {
	console.log('Hola mundo');

	let opt = '';
	do {
		opt = await inquirerMenu();
		console.log('👀 - main - opt:', opt);

		//if (opt !== '0') await pause();
	} while (opt != 0);
};

main();
