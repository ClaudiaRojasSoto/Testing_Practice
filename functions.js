function stringLength(string) {
    const length = string.length;
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
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero Error');
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  module.exports = {
    stringLength,
    reverseString,
    Calculator,
    capitalize,
  };
  