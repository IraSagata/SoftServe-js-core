"use strict";
//task-2
console.log("task-2");
const surname = "Sagata";
console.log(`My surname is ${surname}`);
//task-3
console.log("task-3");
let myFavoriteDessert;
let favoriteDessertOfMyMam;
myFavoriteDessert = "Honeycake";
favoriteDessertOfMyMam = "Cheesecake";
console.log(
  `My favorite dessert is ${myFavoriteDessert}, ,but my mamy always bakes ${favoriteDessertOfMyMam}`
);
myFavoriteDessert = favoriteDessertOfMyMam;
console.log(
  `So, there is no doubt that now I adore ${myFavoriteDessert} as well as my mamy loves ${favoriteDessertOfMyMam}`
);
//task-4
console.log("task-4");
const isAdult = confirm("Did you turn 18?");
console.log(isAdult);
//task-5
console.log("task-5");
let myFirstName;
let mySurname;
let myCourse;
let myYearOfBirth;
myFirstName = "Iryna";
mySurname = "Sagata";
myCourse = "JS core";
myYearOfBirth = 1991;
let iAmSingle;
iAmSingle = true;
console.log(`My first name is ${myFirstName}`);
console.log(`My surname is ${surname}`);
console.log(`I'm attending a ${myCourse} course tomorrow`);
console.log(`I was born in ${myYearOfBirth}`);
if (iAmSingle) {
  console.log(`I am single and that is ${iAmSingle}`);
}
console.log(typeof myFirstName);
console.log(typeof mySurname);
console.log(typeof myCourse);
console.log(typeof myYearOfBirth);
console.log(typeof iAmSingle);
let dateOfBirth;
console.log(typeof dateOfBirth);
var children = null;
console.log(typeof children);
//task-6
console.log("task-6");
let email = prompt("Enter your email:", "user1@gmail.com");
//console.log(`Dear User your email is ${email}`);
let login = prompt("Enter your login:", "user1");
//console.log(`Dear User your login is ${login}`);
//alert(`Dear User your login is ${login}`);
let password = prompt("Enter your password:", "12345");
console.log(
  `Dear User your email is: ${email}, your password is: ${password} and your login is: ${login}`
);
alert(
  `Dear User your email is: ${email}, your password is: ${password} and your login is: ${login}`
);
//task-7
console.log("task-7");
function secundsInHour(number) {
  let secundsInOneHour = 3600;
  let total = secundsInOneHour * number;
  console.log(`${total} seconds equals ${number} hours`);
  //return total;
}

function secundsInDay(days) {
  let secundsInOneDay = 3600 * 24;
  let total = secundsInOneDay * days;
  console.log(`${total} seconds equals ${days} days`);
  //return total;
}
function secundsInMonth(days, months) {
  let secundsInOnemonth = 3600 * 24 * days;
  let total = secundsInOnemonth * months;
  console.log(`${total} seconds equals ${months} months`);
  //return total;
}
secundsInHour(10);
secundsInHour(3);
secundsInDay(10);
secundsInDay(3);
secundsInMonth(30, 5);
secundsInMonth(31, 4);
