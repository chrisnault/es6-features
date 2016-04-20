// var myMap = new Map();
// // maps are key/value pairs
// // for objects, key must be a string, not so for maps

// // set method
// myMap.set('datadir', '/var/data/dev/esp/print-mail/data/');
// myMap.set('confdir', '/usr/local/dev/esp/print-mail/conf/');

// // get method, returns value for given key
// console.log(myMap.get('datadir'));

// // had method, returns true/false
// if (myMap.has('confdir')) {
// 	console.log(myMap.get('confdir'));	
// } else {
// 	console.log('confdir not set');
// }

// // delete removes key/value for given key
// myMap.delete('datadir');

// // Size
// console.log(myMap.size);

// // clear
// myMap.clear();

// // Size
// console.log(myMap.size);

// var user = {name: 'Chris'};
// // key can be an object (user)
// myMap.set(user, 'Omaha');
// console.log(myMap.get(user));

// // this returns the same as above
// user = {name: true};
// myMap.set(user, 'Omaha');
// console.log(myMap.get(user));

// var myMap = new Map();
// myMap.set(1, 'Chris');
// myMap.set(2, 'Sara');
// myMap.set(3, 'Bob');

// // spread operator
// console.log([...myMap]);

// // .keys() .values()
// console.log(myMap.keys());
// console.log(myMap.values());


// chal enge

var location = {
	name: 'Omaha'
}
var secondLocation = {
	name: 'Paris'
}

var cities = new Map();

function setWeather(location, temp) {
	cities.set (location, temp);
}

function printWeather(location) {
	// if has weather print else print no weather
	if (cities.has(location.name)) {
		console.log(`The temp in ${location.name} is ${cities.get(location.name)}`);
	} else {
		console.log(`No weather set for ${location.name}`);
	}
}


setWeather('Omaha', 22);
printWeather(location);
printWeather(secondLocation);



