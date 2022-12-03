// console.log("Hello World")

// Day 3


// BOOLEANS
/*
	A boolean data type represents one of the two values: true or false. Boolean is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false. 

	Examples: (Boolean Values) 
*/

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; 
let falseValue = 4 < 3;

console.log(truValue);
console.log(falseValue);

// We agreed that boolean values are either true or false

// Truthy Values
/*
	- All numbers (positive and negative) are truthy except zero
	- All strings are truthy except an empty string ('')
	- The boolean true
*/

// Falsy Values
/*
	- 0
	- 0n
	- null
	- undefined
	- NaN
	- the boolean false
	- '', "", ``, empty string
*/

// Undefined 
/*
	If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning a value, it will be undefined. 
*/

let firstName;
console.log(firstName);

// Null
let empty = null;
console.log(empty);

