const findTheOldest = function(array) {

    for(let person of array){
        if (person.yearOfDeath == null){
            person.yearOfDeath = 2023;
        }
    }

    array.sort(function(a, b){
        if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) {
            return -1;
        }
        else if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return +1;
        }
        else if ((a.yearOfDeath - a.yearOfBirth) == (b.yearOfDeath - b.yearOfBirth)) {
            return 0;
        }
      })
      console.table(array);
    console.log(array[array.length-1].name)
     return (array[array.length-1])
};

// Do not edit below this line
module.exports = findTheOldest;
