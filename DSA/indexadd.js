var twoSum = function (nums, target) {
  let temp = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      console.log(j);
      if (nums[i] + nums[j] === target) {
        temp.push(i);
        temp.push(j);
      }
    }
  }
  return temp;
};
console.log(twoSum([3, 2, 4], 6));
