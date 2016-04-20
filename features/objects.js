// // valid es5
 var age = 49;
var person = {
	name: 'Chris',
	age: age,
	printAge: function () {
		console.log("Inside function age: " + this.age)
	}
};
console.log('ES5 age: ' + person.age);
person.printAge();

function printHello() {
	console.log('Hello!');
};

// // es6, if the var is the same as the prop then you can leave it off.
// // just use the function name as a shortcut
// // [] dynamic property names. below can be called with personES6.hello5
var personES6 = {
	name: 'Chris',
	age,
	printHello,
	['hello' + ( 3 + 2)]: 'I am here',
	printAge () {
		console.log(this.age);
	}

};
 

console.log(personES6.age);
console.log(personES6.hello5);
personES6.printHello();
personES6.printAge();
