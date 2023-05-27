const add = function(a,b) {
	let result = a + b;

  return result;
};

const subtract = function(a,b) {
	let result = a - b;

  return result;
};

const sum = function(arr) {
	return arr.reduce((total, current) => {
    return total + current;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
    return total * current;
  })
};

const power = function(num, pow) {
  let result = num; 

  for(let i=1; i<pow; i++){
    result *= num;
  }

  return result;
};

const factorial = function(num) {
  let result = 1;

  if(num === 0 || num === 1){
    result = 1;
  }

  for(let i=1; i<=num; i++){
    result *= i;
  }

  return result;
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


factorial(2);