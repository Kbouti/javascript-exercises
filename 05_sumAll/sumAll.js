const sumAll = function(first, second) {
    if (typeof(first) == `number` && typeof(second) == `number` && ((first * second) > 0)) {
      if (first < second){
          let sum = 0;
          for(i = first; i <= second; i++){
              sum += i;
          }
          return sum;
      }
      else if (first > second){
          let sum = 0;
          for(i = second; i <= first; i++){
              sum += i;
          }
          return sum;
      }
    } else {
              return `ERROR`
          }
  }

// Do not edit below this line
module.exports = sumAll;
