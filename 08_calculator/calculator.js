const add = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++){
      sum += arguments[i];
  }
  return sum
};

const subtract = function(a, b) {
  let sum = a - b;
  return sum;

};

const sum = function(input) {
  let total = 0;
  for(let number of input){
   total += number;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  let length = array.length;
  if (length === 0) {
      return 0;
  }
  else if(length === 1){
      total = array[0];
      return total;
  }
  else {
      for (let number of array){
          total *= number;
      }
      return total;
  }
};

const power = function(a, b) {
	let total = a
    for (let i = 1; i <b; i++){
        total *= a;
    }
return total; 
};

const factorial = function(number) {
  let array = [];
  let total = 1;
  for (i = 1; i <=number; i++){
    array.push(i)
 }
 for (let i = 1; i <= array.length; i++){
    total *= i;
 }
 return total
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