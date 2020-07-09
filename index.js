const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const loadSchemasFrom = (dir = '') => {
	//Import all schemas from directory
	const schemas = fs
		.readdirSync(dir)
		.filter(function (file) { return (file.indexOf(".") !== 0) && (file !== "index.js"); })
		.map(function (file) { return path.join(dir, file); })
		.filter(function (file) { return fs.statSync(file).isFile(); })
		.forEach(function (file) {
			var ret = require(file)
			return {name: file, model: ret}
		});
	
	// Register as mongoose.model
	schemas.map(({name, model}) => {
		mongoose.model(name, model)
	}
}

const connect = async (database = '') => {
	mongoose.Promise = global.Promise

	// If the Node process ends, close the Mongoose connection 
	process.on('SIGINT', function () {
		mongoose.connection.close(function () {
			console.log('Mongoose default connection disconnected through app termination');
			process.exit(0);
		});
	});

	return mongoose.connect(database, {
		useMongoClient: true,
	})
}

module.exports = {
	connect,
	loadAllFrom
}
