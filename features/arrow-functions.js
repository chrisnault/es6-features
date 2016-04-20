var people = ['Chris', 'Steve','Tom', 'Bob'];


// // old es5
// people.forEach(function (name) {
// 	console.log(name);
// });

// // es6 arrow functions
// people.forEach((name) => console.log(name));

// people.forEach(name => {
// 	console.log('Welcome')
// 	console.log("\t" + name);

// });


// es5 function def
// function add(a, b) {
// 	return a + b;
// }
// console.log(add(3,4));

// es6 arrow function
//var add = (a,b) => a + b;
// or
// var add = (a,b) => { return a + b;}
// console.log(add(3,4));

// es5 (note the 'this' scope)
// var person = {
// 	name: 'Chris',
// 	likes: ['reading', 'programming'],
// 	generateGreeter: function () {
// 		var that = this;

// 		return function () {
// 			console.log(that.name);
// 		}
// 	}
// };

// person.generateGreeter()();


// es6 (note the this scope)
var person = {
	name: 'Chris',
	likes: ['reading', 'programming'],
	printLikes: function () {
		this.likes.forEach ((like) => console.log(this.name + ' likes ' + like));
	},
	generateGreeter: function () {
		
		return () => {
			console.log(this.name);
		}
	}
};

person.generateGreeter()();
person.printLikes();