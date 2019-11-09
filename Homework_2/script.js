"use strict";
//task-1
const x = 1;
const y = 2;

let res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = "true" + (y || x);
console.log(res2); // Допишіть код, необхідно використовувати змінні x і y // "true2"
console.log(typeof res2); // "string"

let res3 = y > x;
console.log(res3); // Допишіть код, необхідно використовувати змінні x і y // true
console.log(typeof res3); // "boolean"

const res4 = x * "string" * y;
console.log(res4); // Допишіть код, необхідно використовувати змінні x і y // NaN
console.log(typeof res4); // "number"

//task-2
const a = prompt("Enter your number:", 9);
let b = a % 2 ? "odd" : "even";
console.log(`The number ${a} is ${b}`);
let c = a % 7 ? "not multiple" : "mulyiple";
console.log(`The number ${a} is a ${c} of 7`);
// if (b == 0) {
//   console.log(`${a} is an even number`);
// } else {
//   console.log(`${a} is an odd number`);
// }

//task-3
const isAdult = confirm("Are you adult?");
if (isAdult) {
  console.log(`You are an adult`);
} else {
  console.log(`You are a child`);
}

//task-4
const firstSideOfTriangle = prompt("Enter the length of first side:", 5);
const secondSideOfTriangle = prompt("Enter the length of second side", 7);
const thirdSideOfTriangle = prompt("Enter the length of third side", 4);
const p =
  (Number(firstSideOfTriangle) +
    Number(secondSideOfTriangle) +
    Number(thirdSideOfTriangle)) /
  2;
const findAreaOfTriangle = Math.sqrt(
  p *
    (p - firstSideOfTriangle) *
    (p - secondSideOfTriangle) *
    (p - thirdSideOfTriangle)
);
const rounded = findAreaOfTriangle.toFixed(3);
console.log(`the area of triangle =${rounded}`);

//task-5
const now = new Date();
console.log(now);
const getHours = now.getHours();
console.log(getHours);
switch (true) {
  case getHours > 23 && getHours < 5:
    console.log(`Good night!!!`);
    break;
  case getHours > 5 && getHours < 11:
    console.log(`Good morning!!!`);
    break;
  case getHours > 11 && getHours < 17:
    console.log(`Hay!!!`);
    break;
  case getHours > 17 && getHours < 23:
    console.log(`Good evening!!!`);
    break;
}
