function removeFromArray(){
    let list = arguments[0];
    if (arguments.length == 1){;
    console.log(list);
    return list;
    }
    else {
        for(var i = 1; i < arguments.length; i++){
            let item = arguments[i];
            if (list.includes(item)) {
                let position = list.indexOf(item);
                list.splice(position, 1);
            }
        }
        console.log(list);
        return list;
    }
    }
    

// Do not edit below this line
module.exports = removeFromArray;



//   https://www.youtube.com/watch?v=uUnn_SZvik8


// removeFromArray([1, 2, 3, 4, 5, 6, 7], 3)
 removeFromArray([1, 2, 3, 4, 5, 6, 7], 3, 4)




/* level 1 pass:

const removeFromArray = function(list, item) {
let position = list.indexOf(item);
list.splice(position, 1);
return list
};


chatgpt anwer:

function removeItemFromArray(array, itemToRemove) {
  const index = array.indexOf(itemToRemove);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}


My current attempt at test 2:
const removeFromArray = function(list, item) {
    let position = list.indexOf(item);
    list.splice(position, 1);
    if (arguments.length == 2){
    return list
    } else {
        console.log(`horseshit`);
        console.log(arguments());
    }
};
    
Complete test 2:

function removeFromArray(){
    let list = arguments[0];
    console.log(list)
    
    let firstRemoval = arguments[1];
    
    console.log(firstRemoval);
    
    let positionFirst = list.indexOf(firstRemoval);
    list.splice(positionFirst, 1);
    
    console.log(list);
    if (arguments.length == 2){
        return list;
    }
    else {
    
    let secondRemoval = arguments[2];
    
    
    let positionSecond = list.indexOf(secondRemoval);
    list.splice(positionSecond, 1);
    
    console.log(list);
    
    return list
    
    }
}



Third iteration:

function removeFromArray(){
    let length = arguments.length;
    console.log(length);
    
    if (length == 1){
        let list = arguments[0];
        console.log(list)
        return list;    
    }
    
    else if (length == 2) {
        let list = arguments[0];
        let item1 = arguments[1];
        console.log(item1);
        let position1 = list.indexOf(item1);
        list.splice(position1, 1);
        console.log(list)
        return list;
    }
    
    else if (length == 3){
        let list = arguments[0];
        let item1 = arguments[1];
        let item2 = arguments[2];
        let position1 = list.indexOf(item1);
        list.splice(position1, 1);
        let position2 = list.indexOf(item2);
        list.splice(position2, 1);
        console.log(list)
        return list;
    }
}


WAYYYYYY better fix for part 2:

function removeFromArray(){
let list = arguments[0];
if (arguments.length == 1){;
console.log(list);
return list;
}
else {
    for(var i = 1; i < arguments.length; i++){
        let item = arguments[i];
        let position = list.indexOf(item);
        list.splice(position, 1);
    }
    console.log(list);
    return list;
}
}


complete test 2, 3, 4, and 5:

function removeFromArray(){
    let list = arguments[0];
    if (arguments.length == 1){;
    console.log(list);
    return list;
    }
    else {
        for(var i = 1; i < arguments.length; i++){
            let item = arguments[i];
            if (list.includes(item)) {
                let position = list.indexOf(item);
                list.splice(position, 1);
            }
        }
        console.log(list);
        return list;
    }
    }


*/