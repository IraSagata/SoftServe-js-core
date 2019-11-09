"use strict";
//task-1
console.log("task-1");
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
console.log("task-2");
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
console.log("task-3");
const isAdult = confirm("Are you adult?");
if (isAdult) {
  console.log(`You are an adult`);
} else {
  console.log(`You are a child`);
}

//task-4
console.log("task-4");
const firstSideOfTriangle = prompt("Enter number:", 5);
const secondSideOfTriangle = prompt("Enter number", 7);
const thirdSideOfTriangle = prompt("Enter number", 4);
if (
  firstSideOfTriangle != "" &&
  secondSideOfTriangle != "" &&
  thirdSideOfTriangle != ""
) {
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
} else {
  alert("Come on!!! enter number!!!");
}

//task-5
console.log("task-5");
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
// Page 3 Task-1
console.log("Page 3 task-1");

function findAreaOfTheSquare(side) {
  return side ** 2;
}
console.log(findAreaOfTheSquare(4));
// Page 3 Task-2
console.log("Page 3 task-2");
function groupNumber(number) {
  console.log(parseInt(number / 10));
  console.log(number % 10);
}
groupNumber(48);
// Page 3 Task-3
console.log("Page 3 task-3");
let firstNumber = prompt("Enter number:", 6);
let secondNumber = prompt("Enter number again:", 2);
if (firstNumber > 2 && secondNumber <= 3) {
  console.log(
    `First number is ${firstNumber} is more then 2 and a second number is ${secondNumber} is less then 3`
  );
} else {
  console.log(`This numbers don't seem to be appropriate`);
}
// Page 3 Task-4
console.log("Page 3 task-4");
let andAgainFirstNumber = prompt("Enter number:", 1);
let andAgainSecondNumber = prompt("Enter number again:", 2);
let andAgainThirdNumber = prompt("Enter number again:", 3);
if (
  andAgainFirstNumber < andAgainSecondNumber &&
  andAgainSecondNumber < andAgainThirdNumber
) {
  console.log(
    `It is true that ${andAgainFirstNumber}<${andAgainSecondNumber}<${andAgainThirdNumber}`
  );
} else {
  console.log(`Does not work for me!!!`);
}
// Page 3 Task-5
console.log("Page 3 task-5");
const num = prompt("Enter number:", 563);
const checkNum = Math.floor(num / 100) > 0 ? "true" : "faulse";
console.log(`It is ${checkNum} that number consist of 3 digits`);
const checker = num % 2 ? "odd" : "even";
console.log(`Number ${num} is ${checker}`);
