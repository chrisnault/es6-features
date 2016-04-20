// var locations = [];

// locations.push({
// 	name: 'Ashland',
// 	weather: '75'
// });

// locations.push({
// 	name: 'Dallas',
// 	weather: '90'
// });

// for (let location of locations) {
// 	console.log(`It is ${location.weather} in ${location.name}`);
// }


// challenge area
function averageGrade(...grades) {
	var total = 0;
	for (let grade of grades) {
		total += grade;
	}
	return (total / grades.length);
}

var total = averageGrade(1,44,99,88,98,56,100,100,100,100,100,100);
console.log(`Average = ${total}`)