# pyd

[![npm](https://img.shields.io/npm/v/pyd.svg?style=flat-square)](https://www.npmjs.com/package/pyd)
[![npm](https://img.shields.io/npm/dt/pyd.svg?style=flat-square)](https://www.npmjs.com/package/pyd)

Run pyramid structures in Node.JS via the simple way.

## Overview

For example, if you have three functions that must be called  in a pyramid structure:

```javascript
//Function1
function Function1(v, cb){ /* do something */ return cb(value); }

//Function2
function Function2(v, cb){ /* do something */ return cb(value); }

//Function3
function Function3(v, cb){ /* do something */ return cb(value); }
```

**pyd** will transform the following pyramid structure:

```javascript
function test(v)
{
	//Run the first function
	Function1(v, function(v1){

		//Run the second function
		Function2(v1, function(v2){

			//Run the third function
			Function3(v2, function(v3){

				//Show output
				return console.log('Start: ' + v + ', end: ' + v3);

			});

		});

	});
}
```

On this:

```javascript
//Import pyd
var pyd = require('pyd');

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
```


## API

### p.start(function)

Defines the first function to run on the pyramid. The argument must be a function that gets two arguments:

- `value`: the value with the function will be called. For multiple arguments, you must use an object.
- `callback`: a function to call the next function on the pyramid. You must give the value that will be used as argument for the following function.

### p.then(function)

Set the next function to run in your pyramid. You can set all functions as you need. The argument must be the same as described in the `p.start` method.

### p.end(function)

Set the last function to execute in the pyramid. On this case, the argument must be a function that will be called with the last value generated on the pyramid.

### p.run(value)

Run the pyramid. The argument must be a value that will be used as the value for the first function on the pyramid.

## Examples

You can find examples using the **pyd** module on the `examples` folder.

## License

Under the [MIT LICENSE](./LICENSE).
