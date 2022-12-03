			function argumentFunction(){
			    console.log("This function was passed as an argument before the message was printed.")
			}

			function invokeFunction(argumentFunction){
			    argumentFunction();
			}


			// Adding and removing the parentheses "()" impacts the output of JavaScript heavily
			// When a function is used with parentheses "()", it denotes invoking/calling a function
			// A function used without a parenthesis is normally associated with using the function as an argument to another function
			invokeFunction(argumentFunction);

			//or finding more information about a function in the console using console.log()
			console.log(argumentFunction);
