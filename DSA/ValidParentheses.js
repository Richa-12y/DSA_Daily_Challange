/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
  Input: s = "()"
  Output: true
  Input: s = "()[]{}"
  Output: true
  Input: s = "(]"
  Output: false
 */
// [1, 1, 2, 3, 4, 4];

// function mergeTwoLists(list1, list2) {
//   let newArray = [...list1, ...list2].sort();
//   return newArray;
// }
// const value = mergeTwoLists([1, 2, 4], [1, 3, 4]);
// console.log(value);

// var list1 = [1, 2, 4];
// var list2 = [1, 3, 4];

function mergeTwoLists(list1, list2) {
  let newArray = [...list1, ...list2].sort();
  console.log(newArray);
}
mergeTwoLists([1, 2, 4], [1, 3, 4]);
