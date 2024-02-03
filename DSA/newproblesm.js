/**
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [9,4]
  Explanation: [4,9] is also accepted.
   we will apply the two loops  then compare index[i] tp index[j]
   then both are equal then push that to temp val  after that we will return the temp val
 */

function checkDupicate(arr1, arr2) {
  let temp = [];
  let tempNew = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        temp.push(arr1[i]);
      }
    }
  }
  for (let k = 0; k < temp.length; k++) {
    if (temp[k] === temp[k + 1]) {
      tempNew.push(temp[k]);
    }
  }
  return tempNew;
}
console.log(checkDupicate([4, 9, 5], [9, 4, 9, 8, 4]));

/**
 * another way to do this
 * [4, 9, 5], [9, 4, 9, 8, 4]
 */

let a1 = [4, 9, 5];
let b1 = [9, 4, 9, 8, 4];
let check = [...a1, ...b1];
// console.log(check);
// let removeTheduplicate = check.filter((el) => console.log(el));
console.log(removeTheduplicate);
