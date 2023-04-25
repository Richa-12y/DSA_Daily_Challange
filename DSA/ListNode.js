/**
 * Input: head = [4,5,1,9], node = 5
   Output: [4,1,9]
   Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
   ->first apply the loop for outer 
   ->node to  compare both equal or not if not equal push that in temp varibles then return that
 */

function deleteNode(arr, node) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== node) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(deleteNode([4, 5, 1, 9], 5));
