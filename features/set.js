// // a set is just values (like an array) but will be unique
// var chatrooms = new Set();

// chatrooms.add('LOTR fans');
// chatrooms.add('General');
// chatrooms.add('Runners');
// chatrooms.add('Bikers');

// // this doesn't get added because its a dupe
// chatrooms.add('Bikers');

// // size
// console.log(chatrooms.size);

// // loop through with 'let of'
// for (let room of chatrooms) {
// 	console.log(`Found chat room: ${room}`);
// }

// // has?
// console.log(`Does the set have General: ${chatrooms.has('General')}`);

// //delete
// chatrooms.delete('General');

// // has?
// console.log(`Does the set have General: ${chatrooms.has('General')}`);

// // can add anything
// chatrooms.add({name: 'Chris'});
// // conversions
// // to array with spread operator
// console.log(...chatrooms);

// // loop through with forEach()
// chatrooms.forEach(function (room) {
// 	console.log(`Found chat room: ${room}`);
// });

// challenge area

var movies = new Set();

function addMovie(movieTitle) {
	if (movies.has(movieTitle)) {
		console.log(`Error: ${movieTitle} is already in the set`);
	} else {
		movies.add(movieTitle);
		console.log(`Success: ${movieTitle} added to the set`);
	}
}


addMovie('A New Hope');
addMovie('Shawshank Redemption');
addMovie('X-men First Class');
addMovie('Caddyshack');
addMovie('Caddyshack');



























