// Object defination
'use strict';
const person = {
	firstName: "Anil",
	lastName: "Jangra",
	age: 40,
	friends: ["Ram", "Hanuman", "Krishan"]
}
console.log(person);

//access object - using . and []
console.log(person.firstName);
console.log(person['lastName']);

//Add property inside object - both way using . and []
person.address= "Germany";
person.friends.push("Shyama");
person['age'] = 40; //using []

console.log(person);

console.log(`My name is ${person.firstName} ${person.lastName}. I'm ${person.age} years old. I have ${person.friends.length} friends, ${person.friends[1]} is my best friend `);

console.log(`\n**************** Function inside object **************`)
//Function inside object
const person2 = {
	firstName: "Anil",
	lastName: "Jangra",
	birthYear: 2000,
	friends: ["Ram", "Hanuman", "Krishan"],
	hasDrivingLicense : true,
	calcAge: function () {
		this.age = 2025 - this.birthYear; // create a property age and store value in this to avoid DRI (do not repeat) principal
		return this.age;
	},
	getSummery: function () {
		return `Hi I'm ${this.firstName} ${this.lastName}. And I ${this.hasDrivingLicense ? 'have' : "don't have"} a driving license`;
	}
}

console.log(person2.calcAge())
console.log(person2.getSummery())