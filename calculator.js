function add(val1, val2) {
  return val1 + val2;
}
function subtract(val1, val2) {
  return val1 - val2;
}
function multiply(val1, val2) {
  return val1 * val2;
}
function divide(val1, val2) {
  return val1 / val2;
}

function operate(num1, num2, operator) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}
console.log(operate(3, 4, ""));

// const regex = {
//   arithmetic: /^[\d\.]{1,5}(\*|\+|\/|-)[\d\.]{1,5}$/,
// };
// const one=document.querySelector('#one');
// const disp=document.querySelector('input');
// one.addEventListener('click',myfun)
// function myfun(){
//   disp.value+='1'
// }
