/**
 * selection sort
 * in this first value we consider as a min vale then we compare that
 * [2,1,19,15,0,7]->i/p
 * [0,1,2,7,15,19]->o/p
 */

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
const result = selectionSort([2, 1, 19, 15, 0, 7]);
console.log(result);
