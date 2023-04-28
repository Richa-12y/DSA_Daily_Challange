/**
 * Input: head = [1,2,3,4,5], n = 2
   Output: [1,2,3,5]
   apply the loop with last then compare wuth taget return that
 */

function removeNthFromEnd(arr, n) {
  return arr.filter((el, i) => i !== arr.length - n);
}
console.log(removeNthFromEnd([1, 2], 1));
