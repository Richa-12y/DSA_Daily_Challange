/**
 *
 * Input: nums = [5,7,7,8,8,10], target = 8
 *    Output: [3,4]
 *  Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * first we apply the for loop then in if block will compare the arr[i] to target if match then
 * return the position if it is not present return -1 -1
 */

function searchRange(nums, target) {
  let storePosition = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      storePosition.push(i);
    }
  }
  if (storePosition.length === 0) {
    return [-1, -1];
  }
  return storePosition;
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

let includeSlary = true;
const employee = {
  name: "Richa",
  lastName: "Singh",
  ...(includeSlary && { salary: 400 }),
};
console.log(employee);

const employee1 = {
  name: "Richa",
  lastName: "Singh",
};
const { lastName, ...newemployee1 } = employee1;
console.log(newemployee1);
