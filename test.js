let displayText = document.getElementById("display");
const allBtns = document.querySelectorAll("button");
let operator;
let initialVal;


// fix udefined and null
//fix do all operation seperately 
allBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const buttonText = btn.textContent;
    let finalVal;
    if (
      buttonText === "+" ||
      buttonText === "-" ||
      buttonText === "*" ||
      buttonText === "/"
    ) {
      initialVal = displayText.textContent;
      operator = buttonText;
      displayText.textContent = "";
    } else if (buttonText === "=") {
        finalVal = displayText.textContent;
      if (typeof initialVal === "undefined" || typeof finalVal === "undefined" || typeof operator === "undefined") {
        displayText.textContent = "Error";
      } else {
        console.log(finalVal);
        console.log(operator);
        console.log(initialVal);
        displayText.textContent = operate(
          operator,
          parseFloat(initialVal),
          parseFloat(finalVal)
        );
      }
    } else if (buttonText === "CLEAR") {
      displayText.textContent = "";
      operator = null;
      initialVal = null;
    } else {
      displayText.textContent += btn.textContent;
    }
  })
);

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  if (num2 === 0) {
    return "Cannot Divide by Zero";
  } else {
    return num1 / num2;
  }
}
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return mult(num1, num2);
      break;
    case "/":
      return div(num1, num2);
      break;
    default:
      console.log("No operation provide");
      return null;
  }
}
