/**
 * Given an array of integers, return indices of the two numbers such that they add

up to a specific target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

 nums = [2, 7, 11, 15], target = 9,
 Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    console.log(diff);
    const diffIndex = nums.indexOf(diff);
    console.log(diffIndex);
    if (diffIndex !== -1 && diffIndex != i) {
      return [i, diffIndex];
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));

// Another Methods

function addTwoNumber(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}
const reults = addTwoNumber([2, 7, 11, 15], 9);
console.log(reults);
