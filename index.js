var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');


var models = {}
module.exports = {
	connect: connect,
	loadAllFrom: loadAllFrom
}




function loadAllFrom(dir) {
	//Import all schemas from directory
	fs
		.readdirSync(dir)
		.filter(function (file) { return (file.indexOf(".") !== 0) && (file !== "index.js"); })
		.map(function (file) { return path.join(dir, file); })
		.filter(function (file) { return fs.statSync(file).isFile(); })
		.forEach(function (file) {
			var ret = require(file)
		});
}



//------------------
//Set mongoose promise style
// Returns promise
//------------------
async function connect(database) {
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


