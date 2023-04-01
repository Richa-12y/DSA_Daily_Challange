/**
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 *
 */

function moveZeroes(params) {
  let newArray = [...params];
  let nonZeroArray = [];
  let zeroArray = [];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === 0) {
      zeroArray.push(newArray[i]);
    } else {
      nonZeroArray.push(newArray[i]);
    }
  }
  return [...nonZeroArray, ...zeroArray];
}
console.log(moveZeroes([0, 1, 0, 3, 12]));
