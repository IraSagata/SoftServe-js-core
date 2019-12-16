function insert(param) {
  let value = document.calc.textview.value;

  if (isNaN(param)) {
    let lastChar = value.slice(value.length - 1); //previous character
    if (isNaN(lastChar)) {
      backspace();
      document.calc.textview.value = value;
    } else {
      document.calc.textview.value = value + param;
    }
  } else {
    document.calc.textview.value = value + param;
  }
  //   let regEx = /^[\+\.\-\/\*]/;
  //   if (regEx.test(param)) {
  //     let lastChar = value.slice(value.length - 1);
  //     if (regEx.test(lastChar)) {
  //       backspace();
  //       document.calc.textview.value = value;
  //     } else {
  //       document.calc.textview.value = value + param;
  //     }
  //   } else {
  //     document.calc.textview.value = value + param;
  //   }
}
function clearInput() {
  document.calc.textview.value = "";
}
function calculate() {
  document.calc.textview.value = eval(document.calc.textview.value);
}
function backspace() {
  document.calc.textview.value = document.calc.textview.value.slice(0, -1);
}
