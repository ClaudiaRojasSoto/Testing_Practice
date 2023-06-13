function stringLength(string) {
  const { length } = string;
  if (length < 1 || length > 10) {
    throw new Error('Invalid string length');
  }
  return length;
}

function reverseString(string) {
  return [...string].reverse().join('');
}

class Calculator {
  add(a, b) {
    this.a = a;
    this.b = b;
    return this.a + this.b;
  }

  subtract(a, b) {
    this.a = a;
    this.b = b;
    return this.a - this.b;
  }

  divide(a, b) {
    this.a = a;
    this.b = b;
    if (this.b === 0) {
      throw new Error('Division by zero Error');
    }
    return this.a / this.b;
  }

  multiply(a, b) {
    this.a = a;
    this.b = b;
    return this.a * this.b;
  }
}

function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error('Input should be a string');
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
};
