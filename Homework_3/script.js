"use strict";
//task-1
console.log("task-1");
const arr = [2, 3, 4, 5];
let multFor = arr[0];
let multWhile = arr[0];
let counter = 1;

for (let i = 1; i < arr.length; i++) {
  multFor *= arr[i];
}

while (counter < arr.length) {
  multWhile *= arr[counter];
  counter += 1;
}
console.log(multWhile);
console.log(multFor);

//task-2
console.log("task-2");
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < array.length; i += 1) {
  if (array[i] % 2 == 0) {
    console.log(array[i], "is even");
  } else {
    console.log(array[i], "is odd");
  }
}
//task-3
console.log("task-3");
function randArray(k) {
  const numbers = [];

  for (let i = 0; i < k; i += 1) {
    numbers.push(Math.floor(Math.random() * 501));
  }

  console.log(numbers);
}
randArray(5);

//task-4
console.log("task-4");
let getFirstNumber = prompt("Enter number", 4);
let getSecondNumber = prompt("Enter number", 3);
function raiseToDegree(a, b) {
  console.log(a ** b);
}
raiseToDegree(getFirstNumber, getSecondNumber);

//task-5
console.log("task-5");
function lastElem(arr, b) {
  if (b === undefined) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(length - b);
  }
}
console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

//task-6
console.log("task-6");
function transformFirstLetterToUpperCase(str) {
  let array = str.split(" ");
  //console.log(array);
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);
  }
  let finalString = array.join(" ");
  return finalString;
}
console.log(transformFirstLetterToUpperCase("i love java script"));
