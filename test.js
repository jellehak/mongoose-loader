	
	//-------------
	// Some event handlers
	//-------------
	//https://stackoverflow.com/questions/6676499/is-there-a-mongoose-connect-error-callback
	// CONNECTION EVENTS
	// When successfully connected
	/*
	mongoose.connection.on('connected', function () {  
	  console.log('Mongoose default connection open to ' + database);
	}); 
	
	// If the connection throws an error
	mongoose.connection.on('error',function (err) {  
	  console.log('Mongoose default connection error: ' + err);
	}); 
	
	// When the connection is disconnected
	mongoose.connection.on('disconnected', function () {  
	  console.log('Mongoose default connection disconnected '+ database); 
	});
	*/