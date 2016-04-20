// classes

class Person {
	
	// constructor
	constructor (name) {
		// ternary? operator condiction ? true value : false value
		this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
	}

	printGreeting () {
		console.log(`Hello I am ${this.name}`);
	}

	// static method / no instance of this object is required to use 
	// with slice method too
	static capitalizeWord(word) {
		return word[0].toUpperCase() + word.slice(1);
	}

}

var person1 = new Person('chris');
var person2= new Person('sara');
var person3 = new Person();

person1.age = 49;

//console.log(person1.name + ' ' + person1.age);
person1.printGreeting();
person2.printGreeting();

// call static method with no instance of Person
console.log(Person.capitalizeWord('dkdkdkdkdk'));
