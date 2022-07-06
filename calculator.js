//initialization of variable to be used in the convertmyInput() function
let splitInput;

//functions that perform the actual arithmetic
function add(val1, val2) {
  if (val1 + val2 > 200000000 || val1 + val2 < -20000000) {
    return "OUT OF RANGE!";
  } else {
    return (val1 + val2).toFixed(2);
  }
}
function subtract(val1, val2) {
  if (val1 - val2 < -2000000) {
    return "OUT OF RANGE!";
  } else {
    return (val1 - val2).toFixed(2);
  }
}
function multiply(val1, val2) {
  if (val1 * val2 > 200000000 || val1 * val2 < -50000000) {
    return "OUT OF RANGE!";
  } else {
    return (val1 * val2).toFixed(2);
  }
}
function divide(val1, val2) {
  if (val1 / val2 < 0.0000001) {
    return 0;
  } else {
    return (val1 / val2).toFixed(2);
  }
}

// const regex = {
//   arithmetic: /^[\d\.]{1,5}(\*|\+|\/|-)[\d\.]{1,5}$/,
// };
let myInput = "";
document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    if (
      event.target.textContent == parseInt(event.target.textContent) || //to check if the value in the button is a number
      event.target.textContent == "." || //to check if the value in the button is a dot(.)
      event.target.textContent == "(" || //to check if the value in the button is a left-bracket
      event.target.textContent == ")" //to check if the value in the button is a right-bracket
    ) {
      document.querySelector("input").value += event.target.textContent;
    } else if (event.target.attributes.name.value == "divide") {
      document.querySelector("input").value += "/";
    } else if (event.target.attributes.name.value == "multiply") {
      document.querySelector("input").value += "*";
    } else if (event.target.attributes.name.value == "subtract") {
      document.querySelector("input").value += "-";
    } else if (event.target.attributes.name.value == "add") {
      document.querySelector("input").value += "+";
    }
    myInput = document.querySelector("input").value;
    console.log(myInput); //raw input
    convertmyInput(myInput); //array input
    operateInput(convertmyInput(myInput));
  }

  //function that passes arguments to the add(),subtract(),multiply() or divide() functions
  function operate(num1 = 0, num2 = 0, operator = "") {
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

  //function to convert myInput into an array of characters
  function convertmyInput(myInput) {
    splitInput = myInput.split("");
    return splitInput;
  }

  //function to pass arguments into the operate function
  function operateInput(mysplitInput) {
    for (let j = 0; j < mysplitInput.length; j++) {
      if (mysplitInput[j] == "(" || mysplitInput == ")") {
        mysplitInput[j] = "";
      }
    }
    const multiply = mysplitInput.indexOf("*");
    const divide = mysplitInput.indexOf("/");
    const add = mysplitInput.indexOf("+");
    const subtract = mysplitInput.indexOf("-");
    let myOperator;
    if (multiply > -1 && divide == -1 && add == -1 && subtract == -1) {
      myOperator = mysplitInput[multiply];
      console.log('"' + myOperator + '"');
    } else if (multiply == -1 && divide > -1 && add == -1 && subtract == -1) {
      myOperator = mysplitInput[divide];
      console.log('"' + myOperator + '"');
    } else if (multiply == -1 && divide == -1 && add > -1 && subtract == -1) {
      myOperator = mysplitInput[add];
      console.log('"' + myOperator + '"');
    } else if (multiply == -1 && divide == -1 && add == -1 && subtract > -1) {
      myOperator = mysplitInput[subtract];
      console.log('"' + myOperator + '"');
    } else if (multiply == -1 && divide == -1 && add == -1 && subtract == -1) {
      console.log("No Operator available!");
    }
    let prenum = +mysplitInput
      .slice(0, mysplitInput.indexOf(myOperator))
      .join("");
    let postnum = +mysplitInput
      .slice(mysplitInput.indexOf(myOperator) + 1)
      .join("");
    console.log(prenum + " and " + postnum);
    document.querySelector("output").value = operate(
      prenum,
      postnum,
      myOperator
    );
    if (document.querySelector("output").value == "undefined") {
      document.querySelector("output").value = postnum;
    }
  }
});
