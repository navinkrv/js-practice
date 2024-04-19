/*
Function : block of code that perform specific activity
#### SYNTAX ####

function print() {
	console.log("hello");
}

print();

function add(a, b) {
	console.log(a + b);
}

add(2, 3);
add(5, 3);
add(5, 4);



function add(a, b) {
	return a + b;
}

let sum = add(2, 3);

console.log("🚀 ~ sum:", sum);

Q. to create a function that recieves a number and check whether it is even or odd
Q. to create a function that recieves a number and check whether it is prime number

// callback functions

setTimeout(function () {
	console.log("hello");
}, 2000);
*/

// ARRAY
// MAP
let arr = [2, 4, 4, 5, 5, 6, 4];

let arr2 = arr.map(function (item) {
	// console.log(item + 1);
	return item;
});
console.log("🚀 ~ arr2 ~ arr2:", arr2);

// FILTER

let arr3 = arr.filter(function (item) {
	if (item % 2 == 0) {
		return item;
	}
});
console.log("🚀 ~ arr3 ~ arr3:", arr3);

/*
Q. To filter correct mobile numbers in an array of 10 mobile number
Q. Create a function named LOGIN. accept two parameters : username and password. if username and password is correct. print login successfull else print error
Q. Create a function that accept a number and check whether it is prime or not

*/
