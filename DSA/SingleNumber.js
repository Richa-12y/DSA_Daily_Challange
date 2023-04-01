/**
 * Input: nums = [2,2,1]
   Output: 1
   will check if arr[i] is not equal to arr[j] then push into new notEqualValue
 */

function singleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let notEqualValue = [];
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] != arr[j]) {
        return notEqualValue.push(arr[i]);
      }
    }
  }
}
console.log(singleNumber([2, 2, 1]));
