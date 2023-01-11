const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numArray) {
  total = 0;
	numArray.forEach(num => {
    total += num;
  });
  return total;
};

const multiply = function(numArray) {
  total = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (i == 0) {
      total = numArray[i];
      continue;
    }
    total *= numArray[i]
  }
  return total;
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
