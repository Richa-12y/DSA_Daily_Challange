/**
 * Count unique number
 * [1,1,2,2,3,4,4,5,6,7,8,8]
 * output->8
 */
/**
 * condition
 * index i=0 j=1
 * if i and j value match in that condition loop will continue i=1 j=1
 * if array[i]!==array[j] if array[i] value is not match with array[j] in that condition we
 * incement the i value i++
 * next we store the array[j] value to array[i]
 * array[i]=array[j]
 *
 *
 */
// function countUnique(array) {
//   if (array.length > 0) {
//     let i = 0;
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         i++;
//         array[i] = array[j];
//       }
//     }
//     return i + 1; //bcz i start from zero
//   } else {
//     throw new Error("Array is empty");
//   }
// }
// const results = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
// console.log(results);

function uniqeNumberFinf(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}
const reults = uniqeNumberFinf([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 9]);
console.log(reults);
