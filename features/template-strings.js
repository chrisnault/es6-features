//nodemon --exec babel-node ./features/template-strings.js

// string template use backticks 
// any javascript expression can go in  ${}
function greet(name = 'Chris') {
	console.log('Hello ' + name + '!');
	console.log(`Hello ${name}!`);
}

greet();
greet('Bob');

console.log(`2 + 2 = ${2 + 2}`);

// formatting will include the spaces
console.log(`Hey, 
	This kind of looks like an email!

	-Chris
`);