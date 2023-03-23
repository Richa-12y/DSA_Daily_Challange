/**
 * array[6,5,7,8,9,10,2,1,19]->default
 * if we have to compare two index then sort them like this [5,6,7,8,9,10,2,1,19]
 * if value is less than in that case we incese the i and j values
 * otherwise we swap the data [array[i],array[j]]=[array[j],array[i]]
 *
 */
let myDefaultArray = [6, 5, 7, 8, 9, 10, 2, 1, 19];
let myNewarray = [];
let i = 0;
let j = 1;

function issortingCheck(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortingCheck(array) {
  if (issortingCheck(array)) {
    myNewarray = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortingCheck(array); //recussion
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sortingCheck(array);
  }
}
sortingCheck(myDefaultArray);
console.log(myNewarray);

function sorting(params) {
  let sortArray = params.sort((a, b) => a - b);
  console.log(sortArray);
}
sorting([5, 6, 7, 8, 9, 10, 2, 1, 19]);
