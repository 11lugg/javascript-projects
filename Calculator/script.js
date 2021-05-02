let firstValue = "";
let operandValue = "";
let secondValue = "";

const capture = (buttonValue) => {
  let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let arithmeticArray = ["X", "-", "+", "÷"];

  let result = document.getElementById("result");

  let isNumber = numberArray.includes(buttonValue.value);
  let isArithmetic = arithmeticArray.includes(buttonValue.value);
  let isClear = buttonValue.value === "C";
  let isCalculate = buttonValue.value === "=";

  if (isClear && !isNumber && !isArithmetic && !isCalculate) {
    console.log("clear clicked");

    firstValue = "";
    operandValue = "";
    secondValue = "";

    return (result.value = "");
  } else if (!isClear && isNumber && !isArithmetic && !isCalculate) {
    console.log("number clicked");
    return (result.value += buttonValue.value);
  } else if (!isClear && !isNumber && isArithmetic && !isCalculate) {
    console.log("operator clicked");

    firstValue = result.value;
    operandValue = buttonValue.value;

    return (result.value = "");
  } else if (!isClear && !isNumber && !isArithmetic && isCalculate) {
    console.log("equals clicked");
    if (!firstValue || !operandValue) {
      console.log("you havent got enought numbers");
    }

    secondValue = result.value;
    calculate();
  }
};

const calculate = () => {
  let resultValue = document.getElementById("result");

  let finalResult = "";

  if (operandValue === "+") {
    finalResult = Number(firstValue) + Number(secondValue);
  } else if (operandValue === "-") {
    finalResult = Number(firstValue) - Number(secondValue);
  } else if (operandValue === "X") {
    finalResult = Number(firstValue) * Number(secondValue);
  } else if (operandValue === "÷") {
    finalResult = Number(firstValue) / Number(secondValue);
  }

  return (resultValue.value = finalResult);
};
