const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

function calculate(num1, num2, operation) {
    if (isNaN(num1) || isNaN(num2)) {
        return { error: 'Please enter valid numbers' };
    }

    let result;
    switch (operation) {
        case 'adding':
        // case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return { error: 'Cannot divide by zero' };
            }
            result = num1 / num2;
            break;
        default:
            return { error: 'Invalid operation' };
    }

    return { result };
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    const result = calculate(num1, num2, operation);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = calculate;