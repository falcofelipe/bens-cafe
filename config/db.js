const mongoose = require('mongoose');
const config = require('config');

const db = process.env.MONGODB_URI ?? config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			dbName: 'bensCafeDB',
		});

		console.log('MongoDB Cluster Connected.');
	} catch (err) {
		console.error(err.message);
		process.exit(1); //Uncaught fatal exception
	}
};

module.exports = connectDB;
