//Function to build a pyramid
function pyd()
{
	//Create the calls list
	this.list = [];

	//Last function
	this.last = function(){ return; };

	//Return
	return this;
}

//Add the start function
pyd.prototype.start = function(cb){ this.list = [ cb ]; return this; };

//Add a new call function
pyd.prototype.then = function(cb){ this.list.push(cb); return this; };

//End function
pyd.prototype.end = function(cb){ this.last = cb; return this; };

//Run the pyramid
pyd.prototype.run = function(init){ pyd_recursive(this.list, this.last, 0, init); };

//Run recursive
function pyd_recursive(list, end, index, value)
{
	//Check the index
	if(index >= list.length){ return end(value); }

	//Call the function
	list[index](value, function(next){ return pyd_recursive(list, end, index + 1, next); });
}

//Exports to node
module.exports = pyd;
