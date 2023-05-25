const palindromes = function (string) {
    let lowered = string.toLowerCase();
   let firstArray = lowered.split(``);
   for (let i = 0; i <=2; i++){
    for (let i = 0; i <= firstArray.length; i++){
        if ((firstArray[i] === ` `) || (firstArray[i] === `.`)|| (firstArray[i] === `,`)|| (firstArray[i] === `'`)|| (firstArray[i] === `?`)|| (firstArray[i] === `!`)){
        firstArray.splice(i, 1)
        }
    }
   }
   let reverseArray = firstArray.slice().reverse();
   let newString = firstArray.join(``);
   let reverseString = reverseArray.join(``);
return newString === reverseString;
}

// Do not edit below this line
module.exports = palindromes;
