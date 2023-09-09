
describe('calculate', () => {
  const calculate = require('./server');
  it('should add two numbers', () => {
    expect(calculate(1, 2, 'add')).toEqual({ result: 3 });
  });
  it('should subtract two numbers', () => {
    expect(calculate(1, 2, 'subtract')).toEqual({ result: -1 });
  });
  it('should multiply two numbers', () => {
    expect(calculate(2, 3, 'multiply')).toEqual({ result: 6 });
  });
  it('should divide two numbers', () => {
    expect(calculate(6, 2, 'divide')).toEqual({ result: 3 });
  });
  it ('should exponent a number', () => {
    expect(calculate(2, 3, 'exponentiation')).toEqual({ result: 8});
  });
  it('should show error if division by zero', () => {
    expect(calculate(5, 0, 'divide')).toEqual({ error: 'Cannot divide by zero' });
  });
  it('should handle invalid operation', () => {
    expect(calculate(1, 2, 'invalid')).toEqual({ error: 'Invalid operation' });
  });
});