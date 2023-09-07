const calculateBtn = document.getElementById('calculate');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    const operation = operationSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = 'Please enter valid numbers';
        return;
    }

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1, num2, operation })
    })
    .then(response => response.json())
    .then(data => {
        resultDiv.innerText = `Result: ${data.result}`;
    })
    .catch(error => {
        resultDiv.innerText = 'An error occurred, please try again';
        console.error(error);
    });
});