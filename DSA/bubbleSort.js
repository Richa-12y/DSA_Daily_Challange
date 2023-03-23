/**
 * Bubble sort(Sorting Methods)
 * A sorting algo where the largest values bubble at top
 * [5,9,0,15,8,44,1,6]
 * [5,9,0,15,8,44,1,6]
 * [5,0,9,15,8,44,1,6]
 * [0,5,9,15,8,44,1,6].....
 * [0,1,5,6,8,9,15,44]->output
 */

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    // console.log(array[i]);
    for (let j = 0; j < array.length - 1; j++) {
      //   console.log(array[j]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
const result = bubbleSort([5, 9, 0, 15, 8, 44, 1, 6]);
console.log(result);
