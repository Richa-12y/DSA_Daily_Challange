/**
 * find the value is given in array or not
 * [-5,2,6,1,0]->2=1index
 * 10->-1index bcz it is not avilable
 */

function findIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const result = findIndex([-5, 2, 6, 1, 0], 1);
console.log(result);

// function sortArray(arr, trg) {
//   let newarr = arr.sort((a, b) => a - b);
//   //[ -5, 0, 1, 2, 6 ]
//   for (let i = 0; i < newarr.length; i++) {
//     if(arr[i])
//   }
//   console.log(newarr);
// }
// sortArray([-5, 2, 6, 1, 0], 6);
