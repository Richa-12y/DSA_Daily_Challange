/**
 * How would you insert an element at a given location in an array?
 * [1,6,7,8,9,10]->inplace of 8->insert->11
 * [1,6,7,11,9,10]->let replcetNumber=8
 * after that apply the loop
 *
 */

function insertNumber(arr, match, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == match) {
      arr[i] = target;
    }
  }
  return arr;
}
console.log(insertNumber([1, 6, 7, 8, 9, 10], 8, 11));

/**
 * add the value at particuler index
 * [1,6,7,8,9,10]->[1,6,5,8,9,10]
 * 7->5
 */

function addParticularValue(list, index, value) {
  let storeResult = [...list];
  for (let i = 0; i < storeResult.length; i++) {
    if (i === index) {
      storeResult[i] = value;
    }
  }
  //   console.log(list);
  return storeResult;
}
console.log(addParticularValue([1, 6, 7, 8, 9, 10], 2, 5));

/**
 * Another way
 */
function changeValue(list, index, value) {
  let result = [...list];
  result.splice(index, 1, value);
  return result;
}
console.log(changeValue([1, 6, 7, 8, 9, 10], 3, 13));
