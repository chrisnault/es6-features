var person =  {
	name: 'Chris',
	age: 49
};

var defaultPerson =  {
	name: 'Anonymous',
	age: 0
};

// function that takes a person name=anonymous, age=0

// use defaults for args
function sayHello(person = defaultPerson) {
	// use string templates 
	console.log(`Hello ${person.name}, you are ${person.age}!!`)
}

sayHello(person);
sayHello();