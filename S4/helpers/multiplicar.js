const fs = require('fs');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
	try {
		let salida = '';

		for (let i = 1; i <= hasta; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
		}

		fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);

		if (listar) {
			console.log(`TABLA DEL ${base}\n`);
			console.log(salida);
		}

		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	crearArchivo,
};
