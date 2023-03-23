const repeatString = function(string, num) {
    let i = 0;
    let newString = ``;
    if (num < 0){
        newString = `ERROR`;
    }
    for (i = 0; i < num; i++){
        newString = newString + string;
    }
return newString;
  
};



// Do not edit below this line
module.exports = repeatString;
