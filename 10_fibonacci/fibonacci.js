const fibonacci = function(num) {
    num = parseInt(num);
    if (num <= 0){
        console.log(`OOPS!`)
        return `OOPS`
    }
    let array = [1, 1]
    for (let i = 0; i <num; i++){
        let newNum = array[i] + array[i+1]
        array.push(newNum)
    }
    console.log(`final sequence: ${array}`);
    answer = array[num-1];
    console.log(`index at ${num}: ${answer}`)
    return answer
};

// Do not edit below this line
module.exports = fibonacci;
