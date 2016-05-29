//Function1
function Function1(v, cb){ return cb(v + 1); }

//Function2
function Function2(v, cb){ return cb(v + 2); }

//Function3
function Function3(v, cb){ return cb(v + 3); }

//Test
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

test(0);
