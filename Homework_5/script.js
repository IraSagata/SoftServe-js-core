"use strict";
//task-1
console.log("Task - 1");
function testThrow(exception) {
  try {
    throw exception;
  } catch (error) {
    console.log("caught: " + error);
  }
}
testThrow(5); //Caught: 5
testThrow("Test"); //Caught: Test
testThrow(new Error("An error happened")); //Caught: Error: An error happened

//task-2
console.log("Task - 2");
function calcRectangleArea(width, height) {
  try {
    if (isNaN(width)) throw "first is not a number";
    if (isNaN(height)) throw "second is not a number";
  } catch (err) {
    console.log("Argument " + err);
  }
  return width * height;
}

console.log(calcRectangleArea(25, 30));
calcRectangleArea(25, "height");
calcRectangleArea("height", 23);

//task-3
console.log("Task - 3");
function checkAge() {
  try {
    const getAge = prompt("Enter your age:", 18);
    if (getAge == "") throw "The field is empty! Please enter your age";
    if (isNaN(getAge)) throw new TypeError("not a number");
    if (getAge < 14) throw new RangeError("User age is less then 14");
    //return true;
  } catch (err) {
    if (err instanceof RangeError) {
      console.log(">>> RangeError >> ", err);
    } else if (err instanceof TypeError) {
      console.log(">>> TypeError >> ", err);
    } else {
      console.log(">>> UnknownError >>", err);
    }
    //return false;
  }
}
let hasAccess = checkAge();

//task-4
console.log("Task - 4");
class MonthException extends Error {
  constructor(message) {
    super();
    this.name = "MothException";
    this.message = message;
  }
}

function showMonthName(monthNumber) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  try {
    if (monthNumber < 0 || monthNumber > 11) {
      throw new MonthException(`Incorrect month number`);
    }
  } catch (error) {
    if (error instanceof MonthException) {
      console.log(error.name, error.message);
    }
  }

  return months[monthNumber - 1];
}

console.log(showMonthName(5)); //May
console.log(showMonthName(14)); //MonthException Incorrect month number
