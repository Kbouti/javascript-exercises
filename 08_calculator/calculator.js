function add(value1, value2){
  let sum = value1 + value2;
  return sum;
}

function subtract(value1, value2){
  let difference = (value1 - value2);
  return difference;
}

function sum(array){
  let sum = 0;
  for(i = 0; i < array.length; i++){
      sum += array[i];
  }

return sum
}

function multiply(array){
  let product = 1;
  for (i = 0; i < array.length; i++){
      product = (product * array[i]);
  }
  return product
}

function power(base, exponent){
  const b = base
  for(i = 1; i < exponent; i++){
      console.log(base);
      base = base * b;
  }
  return base;
}

const factorial = function() {
	
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
