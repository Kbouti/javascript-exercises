const convertToCelsius = function(temp) {
  temp = (.5556 * (temp - 32))
  temp = Math.round(temp * 10) /10
  console.log(temp)
  return temp;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 1.8) + 32;
  temp = Math.round(temp * 10) /10
  console.log(temp)
return temp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
