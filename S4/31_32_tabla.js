const { crearArchivo } = require('./helpers/multiplicar');
console.clear();

const base = 10;

// crearArchivo(base)
// 	.then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
// 	.catch((err) => console.log(err));
const ejecutar = async (base) => {
	try {
		let nombreArchivo = await crearArchivo(base);
		console.log(nombreArchivo, 'creado');
	} catch (err) {
		throw err;
	}
};
ejecutar(base);
