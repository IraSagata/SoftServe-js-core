// "use strict";
// //task - 1;
// console.log("Task - 1");
// let openTab = window.open(
//   "https://www.w3schools.com",
//   "w3schools",
//   "width=300,height=300"
// );
// console.log(1);
// // setTimeout(
// //   () => (
// //     (openTab = window.open(
// //       "https://www.w3schools.com",
// //       "w3schools",
// //       "width=500,height=500"
// //     )),
// //     9000
// //   )
// // );

// setTimeout(function() {
//   openTab = window.resizeTo(500, 500);
//   console.log(2);
// }, 2000);
// setTimeout(function() {
//   openTab = window.moveTo(200, 200);
//   console.log(3);
// }, 2000);
// setTimeout(function() {
//   openTab = window.close();
//   console.log(4);
// }, 2000);

// //task - 2;
// console.log("Task - 2");
// function changeCSS() {
//   const paragraph = document.querySelector("#text");
//   paragraph.style.color = "#ffa500";
//   paragraph.style.fontSize = "20px";
//   paragraph.style.fontFamily = "Comic Sans MS";
// }

// //task - 3;
// console.log("Task - 3");
// const firstButton = document.querySelector(".first-butt");
// const secondButton = document.querySelector(".second-butt");
// const thirdButton = document.querySelector(".third-butt");
// const body = document.querySelector("body");
// const link = document.querySelector("a");

// firstButton.addEventListener("click", function() {
//   body.style.backgroundColor = "blue";
// });

// secondButton.addEventListener("dblclick", function() {
//   body.style.backgroundColor = "pink";
// });
// thirdButton.addEventListener("mousedown", function() {
//   body.style.backgroundColor = "brown";
//   thirdButton.addEventListener("mouseup", function() {
//     body.style.backgroundColor = "white";
//   });
// });
// link.addEventListener("mouseover", function() {
//   body.style.backgroundColor = "yellow";
// });
// link.addEventListener("mouseout", function() {
//   body.style.backgroundColor = "white";
// });

// //task - 4;
// console.log("Task - 4");
// function myFunction() {
//   const element = document.getElementById("myList");
//   element.remove(element.selectedIndex);
// }

// //task - 5;
// console.log("Task - 5")
// const button = document.querySelector("#button");
// const unorderedList = document.getElementById("unorderedList");

// button.addEventListener("click", e => {
//   addListItem("I was pressed");
// });

// button.addEventListener("mouseenter", e => {
//   addListItem("Mouse on me");
// });

// button.addEventListener("mouseleave", e => {
//   addListItem("Mouse is not on me");
// });

// function addListItem(text) {
//   const newTextNode = document.createTextNode(text);
//   const newListItem = document.createElement("p");
//   newListItem.appendChild(newTextNode);
//   unorderedList.appendChild(newListItem);
// }

// //task - 6;
// console.log("Task - 6");
// window.addEventListener("resize", myFunction);

// function myFunction() {
//   let width = window.outerWidth;
//   let height = window.outerHeight;
//   let txt = "Window size: width=" + width + ", height=" + height;
//   document.getElementById("text").innerHTML = txt;
// }

// //task - 7;
// console.log("Task - 7");

const cities = {
  us: ["New York", "Boston", "Chicago"],
  ua: ["Kiev", "Chicago"],
  de: ["Berlin", "Boston"]
};

function getCities(countryId) {
  console.log(countryId, cities[countryId]);
  return cities[countryId];
}

function reloadCities(countryId) {
  let selectBoxCities = document.getElementById("city");
  selectBoxCities.options.length = 0;

  let countryCities = getCities(countryId);
  for (const cityIndex in countryCities) {
    let option = document.createElement("option");
    console.log(option);
    option.text = countryCities[cityIndex];
    selectBoxCities.add(option);
  }
}

function onChange(s) {
  reloadCities(s[s.selectedIndex].id);
  console.log(reloadCities(s[s.selectedIndex].id));
  console.log(s);
}

const selectBoxCountry = document.getElementById("country");
reloadCities(selectBoxCountry[selectBoxCountry.selectedIndex].id);

// let selected = Array.from(country.options)
//   .filter(option => option.selected)
//   .map(option => option.value);
// alert(selected);
