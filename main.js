let displayText = document.getElementById("display");
const allBtns = document.querySelectorAll("button");
let operator;
let initialVal = "";
let currentVal = "";

allBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const buttonText = btn.textContent;

    if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
      if (operator && currentVal) {
        initialVal = operate(operator, parseFloat(initialVal), parseFloat(currentVal));
        displayText.textContent = initialVal;
      } else {
        initialVal = currentVal;
      }
      currentVal = "";
      operator = buttonText;
      displayText.textContent += " " + operator +" ";
    } else if (buttonText === "=") {
      if (operator && currentVal) {
        initialVal = operate(operator, parseFloat(initialVal), parseFloat(currentVal));
        displayText.textContent = initialVal;
        currentVal = "";
        operator = "";
      }
    } else if (buttonText === "CLEAR") {
      displayText.textContent = "";
      operator = "";
      initialVal = "";
      currentVal = "";
    } else {
      currentVal += buttonText;
      displayText.textContent += buttonText;
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
    case "-":
      return subtract(num1, num2);
    case "*":
      return mult(num1, num2);
    case "/":
      return div(num1, num2);
    default:
      console.log("No operation provided");
      return null;
  }
}
