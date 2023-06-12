import { stringLength, reverseString, Calculator, capitalize } from './functions';

test('calculates string length correctly', () => {
  expect(stringLength('hello')).toBe(5);
});

test('throws an error for invalid string length', () => {
  expect(() => {
    stringLength('');
  }).toThrow('Invalid string length');
});

test('reverses a string correctly', () => {
  expect(reverseString('hello')).toBe('olleh');
});

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers correctly', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('divides two numbers correctly', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => {
      calculator.divide(10, 0);
    }).toThrow('Division by zero Error');
  });

  test('multiplies two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
