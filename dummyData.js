console.log("Inside dummy data");

var faker = require('faker');

var fakeEmail = faker.internet.email();
var fakeAddress = faker.address.streetName() + ', ' + faker.address.streetAddress() + ', ' +
	faker.address.city() + ', ' + faker.address.country() + ' - ' + faker.address.zipCode();
console.log("Fake email is : ", fakeEmail);
console.log("Fake address is: ", fakeAddress);
