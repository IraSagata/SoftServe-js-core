"use strict";
// //task - 1;
// console.log("Task - 1");
// function upperCase(element) {
//   let string = element;
//   let re = /^[A-Z]/;
//   let test = re.test(string);
//   console.log(test);
//   return test;
// }

///////////// 2 vertion

// function upperCase(string){
//   let re = /^[A-Z]/;
//   if(re.test(string){
//     console.log("UpperCase");
//   }
//   else {
//     console.log("not UpperCase");
//   }
// }

// upperCase("regexp");
// upperCase("RegExp");

// //task - 2;
// console.log("Task - 2");
// function checkEmail(el) {
//   let element = el;
//   let re = /[A-Za-z0-9@a-z\.a-z]/;
//   let test = re.test(element);
//   return test;
// }

///////////2 vertion

// function checkEmail(data) {
//   var reg = /\S+@\S+\.\S+/;
//   console.log(reg.test(data));
// }
// console.log(checkEmail("Qmail2@gmail.com"));

// //task - 3;
// console.log("Task - 3");
// let str = "cdbBdbsbz";
// let re = "[dD]([bB]+)([dD])";
// let result = str.match(re);
// console.log(result);

// //task - 4;
// console.log("Task - 4");
// var re = /(\w+)\s(\w+)/;
// var str = "Java Script";
// var newstr = str.replace(re, "$2, $1");
// console.log(newstr); //“Script, Java”

// //task - 5;
// console.log("Task - 5 in html");

// //task - 6 ;
// console.log("Task - 6");
// const re = /^[A-Za-z0-9]+([\_])*([\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// function checkEmail(email) {
//   let ok = re.test(email);
//   console.log(ok);
//   if (!ok) console.log(email + " Email is not correct!");
//   else console.log(email + "Email is correct!");
// }
// checkEmail("my_mail@gmail.com");
// checkEmail("#my_mail@gmail.com");
// checkEmail("-my_mail@gmail.com");
// checkEmail("_mymail@gmail.com");

//task - 7 ;
console.log("Task - 7");
const re = /^[a-zA-Z]+([0-9\*]){2,10}/;
function checkLogin(login) {
  let ok = re.test(login);
  console.log(ok);
  if (ok) {
    let regexp = /\d+/g;
    let findNumber = login.match(regexp);
    for (let element of findNumber) {
      console.log(element);
    }
  } else {
    console.log(login + "Email is not correct!");
  }
}
checkLogin("ee11rii3");
checkLogin("ee1*1ret3");
