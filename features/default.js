//nodemon --exec babel-node ./features/default.js

// defaults for function args
function sayHello(name = 'World') {
	console.log('Hello ' + name + '!');
}

// sayHello('chris');
// sayHello();

// with an object
function greetUser(user = {name: 'Anonymous'}) {
	console.log('Hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'Chris'});

