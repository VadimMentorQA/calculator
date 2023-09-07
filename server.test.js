
describe('calculate', () => {
  const calculate = require('./server');
  it('should add two numbers', () => {
    expect(calculate(1, 2, 'add')).toEqual({ result: 3 });
  });
  it('should subtract two numbers', () => {
    expect(calculate(1, 2, 'subtract')).toEqual({ result: -1 });
  }
  );
});