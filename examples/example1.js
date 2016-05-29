//Import pyd
var pyd = require('../pyd.js');

//Function1
function Function1(v, cb){ return cb(v + 1); }

//Function2
function Function2(v, cb){ return cb(v + 2); }

//Function3
function Function3(v, cb){ return cb(v + 3); }

//Function
function test(v)
{
	//Create the new pyramid
	var p = new pyd();

	//Concatenate the three functions
	p.start(Function1).then(Function2).then(Function3);

	//Last call
	p.end(function(v3){ return console.log('Start: ' + v + ', end: ' + v3); });

	//Run the pyramid
	p.run(v);
}

//Run the test function
test(0);
