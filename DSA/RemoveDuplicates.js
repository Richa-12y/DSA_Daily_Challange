/**
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * solution
 * nums = [0,0,1,1,1,2,2,3,3,4]
 * repeted value:[0,1,2,3,4]
 * this is sorted array so we don't have to sorted them
 * array[0]=0->we apply loop this is outside loop ->i ->loop
 * array[1]=0->we apply loop this is inside loop->j->loop
 * array[0]===array[1]
 * getsameValue=[]
 *
 *
 */

function removeDuplicate(array) {
  let getsameValue = [];
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (temp.includes(array[i])) {
      continue;
    }
    temp.push(array[i]);
    let result = 1;
    // console.log(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        result = result + 1;
      }
    }
    getsameValue.push(result);

    // return result;
  }
  return getsameValue;
}
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
