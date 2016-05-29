//Import pyd
var pyd = require('../pyd.js');

//Example using custom functions
function test()
{
	//Create the pyramid
	var p = new pyd();

	//Start function
	p.start(function(v, cb){ setTimeout(function(){ return cb(v + 1); }, 1000); });

	//Next function
	p.then(function(v, cb){ setTimeout(function(){ return cb(v + 2); }, 1000); });

	//End function
	p.end(function(v){ return console.log(v); });

	//Run
	p.run(0);
}

//Run the test
test();
