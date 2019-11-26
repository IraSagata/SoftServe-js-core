//"use strict";
// //task - 1;
// console.log("Task - 1");
// document.getElementById("test").innerHTML = "last";
// ////////
// document.getElementsByTagName("div")[0].innerHTML = "last";
// ///////
// document.querySelector("#test").textContent = "Last";
// //////
// const list = document.getElementsByTagName("div")[0];
// list.innerHTML = "last";
// //////
// const list = document.querySelector("#test");
// list.textContent = "last";

// //task-2
// console.log("Task - 2");
// const img = document.querySelector("img");
// img.setAttribute("src", "./img/cat.jpg");

// //task-3
// console.log("Task - 3");
// const findAllParagraph = document.getElementsByTagName("div")[0];
// findAllParagraph.getElementsByTagName("p")[0].innerHTML =
//   "Selector text 0: First paragraph";
// findAllParagraph.getElementsByTagName("p")[1].innerHTML =
//   "Selector text 1: Second paragraph";
// findAllParagraph.getElementsByTagName("p")[2].innerHTML =
//   "Selector text 2: Third paragraph";

// //task-4
// console.log("Task - 4");
// const findAllParagraph = document.getElementsByTagName("ol")[0];
// alert(findAllParagraph.getElementsByTagName("li")[0].textContent);
// alert(findAllParagraph.getElementsByTagName("li")[4].textContent);
// alert(findAllParagraph.getElementsByTagName("li")[1].textContent);
// alert(findAllParagraph.getElementsByTagName("li")[3].textContent);
// alert(findAllParagraph.getElementsByTagName("li")[2].textContent);

////task-5
// console.log("Task - 5");
// const mainHeader = document.querySelector("h1");
// mainHeader.style.backgroundColor = "green";
// mainHeader.style.fontWeight = "bold";
// document.querySelector("#myDiv > p:nth-child(1)").style.fontWeight = "bold";
// document.querySelector("#myDiv > p:nth-child(2)").style.color = "red";
// document.querySelector("#myDiv > p:nth-child(3)").style.textDecoration =
//   "underline";
// document.querySelector("#myDiv > p:nth-child(4)").style.fontStyle = "italic";
// document.querySelector("#myList > p:nth-child(o)").style.display =
//   "inline-block";
// document.querySelector("#myList > p:nth-child(1)").style.display =
//   "inline-block";
// document.querySelector("#myList > p:nth-child(2)").style.display =
//   "inline-block";
// document.querySelector("span").style.display = "none";

// //task-6
// console.log("Task - 6");
// const firstInput = document.querySelector("#input1");
// const anotherInput = document.querySelector("#input2");
// let getFirstText = prompt("Say something");
// let getSecondText = prompt("Say something");
// firstInput.setAttribute("value", getFirstText);
// anotherInput.setAttribute("value", getSecondText);
// firstInput.setAttribute("value", getSecondText);
// anotherInput.setAttribute("value", getFirstText);

// //task-7
// console.log("Task - 7");
// document.body.innerHTML = `<body>
// <main class=”mainClass check item”>
//       <div id="myDiv">
//      <p>First paragraph</p>
//    </div>
//  </main>
// </body>`;
