/**
 * Write a program to print the array in reverse order.
 * [1,2,3,4,5,6]->[6,5,4,3,2,1]
 * -if check the who is in first position is going to last position
 * for that we starte with arr.langth-1 and create one temp value in that we push the element
 *
 */

function reverArray(arr) {
  let reverValue = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverValue.push(arr[i]);
  }
  //   console.log(reverValue);
  return reverValue;
}
let result = reverArray([1, 2, 3, 4, 5, 6]);
console.log(result);

/**
 * How would you insert an element at the end of an array?
 * apply the loop then create one temp value inside push the value
 */
function addendOfElement(arr1) {
  let result = [...arr1, 7];
  console.log(result);
}
addendOfElement([1, 2, 3, 4, 5, 6]);
