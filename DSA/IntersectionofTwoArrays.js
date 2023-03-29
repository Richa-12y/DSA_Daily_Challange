/**
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2,2]
    we will apply the two loop 
    then will check with include methode if it is present will return that one
 */

function intersectionTwoArray(nums1, nums2) {
  let storeSame = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j] && !storeSame.includes(nums1[i])) {
        nums1[i] = nums2[j];
        storeSame.push(nums1[i]);
      }
    }
  }
  return storeSame;
}
console.log(intersectionTwoArray([1, 2, 2, 1], [2, 2]));

function intersectionTwoArray(nums1, nums2) {
  let hashMap = new Map();
  let storeSame = [];

  for (let i = 0; i < nums1.length; i++) {
    hashMap.set(nums1[i], hashMap.get(nums1[i]) + 1 || 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (hashMap.get(nums2[i]) > 0) {
      storeSame.push(nums2[i]);
      hashMap.set(nums2[i], hashMap.get(nums2[i]) - 1);
    }
  }

  return storeSame;
}
console.log(intersectionTwoArray([1, 2, 2, 1], [2, 2]));
