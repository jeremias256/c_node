const inquirer = require('inquirer');
require('colors');

const preguntas = {
	type: 'list',
	name: 'opcion',
	message: '¿Qué desea hacer?',
	choices: ['opt1', 'opt2', 'opt3'],
};

const inquirerMenu = async () => {
	//console.clear();
	console.log('==========================='.red);
	console.log('Seleccione una opción');
	console.log('=========================== \n'.red);

	const opt = await inquirer.prompt([preguntas]);

	return opt;
};

module.exports = {
	inquirerMenu,
};
