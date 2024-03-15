const calculateBtn = document.getElementById("calculate");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const resultDiv = document.getElementById("result");

let clickCount = 0;

calculateBtn.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
        resultDiv.innerText = "Hello World";
        return;
    }

    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    const operation = operationSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Please enter valid numbers";
        return;
    }

    const result = calculate(num1, num2, operation);
    resultDiv.innerText = `Result: ${result}`;
});

function calculate(num1, num2, operation) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Please enter valid numbers";
    }

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            result = num1 / num2;
            break;
        case "exponentiation":
            result = num1 ** num2;
            break;
        default:
            return "Invalid operation";
    }

    return result;
}
