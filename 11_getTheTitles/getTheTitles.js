const getTheTitles = function(input) {
    let output = [];
    for (let book of input){
        output.push(book.title)
    }
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
