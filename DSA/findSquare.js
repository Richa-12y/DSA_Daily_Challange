/**
 * Find sqare is avialabe or not in given array
 * array[1,2,3,4] array[1,4,9,16]
 *
 */
/**
 * condition
 * 1*1=1
 * 2*2=4
 * 3*3=9
 * 4*4=16
 * first with one loop
 * we see in the second of array element is same what we have in first array after doing square
 * then second method will be 2 loop method
 *
 */

function findSquare(array, target) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] * array[i] === target[i]) {
      result = true;
      continue;
    } else {
      result = false;
      break;
    }
  }
  return result;
}
const result = findSquare([1, 2, 3, 5], [1, 4, 9, 25]);
console.log(result);

//Another methods

function isSquareCheck(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]);
      isSquare = true;
    }
    if (j === array2.length) {
      //if element is not exist in given array it will return false
      if (!isSquare) {
        return false;
      }
    }
  }
  return true;
}
const Checkresult = findSquare([1, 2, 7, 5], [1, 4, 49, 25]);
console.log(Checkresult);
