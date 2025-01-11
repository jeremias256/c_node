const mongoose = require('mongoose');
const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_CNN);

		console.log('Base de datos online');
	} catch (error) {
		console.log('👀 - dbConnection - error:', error);
		throw new Error('Error en la base de datos');
	}
};

module.exports = { dbConnection };
/* ---------------------------------------------------------------------------------------------- */
/*                                             IMPORT                                             */
/* ---------------------------------------------------------------------------------------------- */
// import mongoose from 'mongoose';

// const dbConnection  = async() => {
//     try{
//         await mongoose.connect(process.env.MONGODB_CNN);

//         console.log('Base de datos online')
//     }catch (error){
//         console.log("👀 - dbConnection - error:", error);
//         throw new Error('Error en la base de datos');
//     }
// }

// export default dbConnection;
