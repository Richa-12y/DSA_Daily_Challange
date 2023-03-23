/**
 * Input: nums = [1,1,2]
   Output: 2, nums = [1,2,_]
   Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
   It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * if apply i loop it will check the length and index of
 * then in that loop do the i+1 it will started with 1 position
 * after that arr[i]===a[i+1] if both value is
 * then push that in one of temp value and store that
 * otherwise if not equal to then arr[i] will be incement
 *
 */

// function removeDublicate(arrone) {
//   for (let i = 0; i <= arrone.length; i++) {
//     let temp = [];
//     if (arrone[i] === arrone[i + 1]) {
//       return temp.push(arrone[i]);
//     }
//   }
// }
// console.log(removeDublicate([1, 5, 7, 8, 9, 10, 1, 17, 16, 18, 3, 18, 4, 3]));

/**
 * arr[3,4,5,1,8]
 *
 * ->first just assume the arr[0] is the smallestNumber
 * -> check the length and loop through that
 * compare the smallestNumber to arr[i] if arr[i] is less then smallestNumber
 * assign arr[i] to smallestNumber
 * after that return the smallestNumber
 * so check here arr[0]=3
 *3<4->true,3<5->true,3<1->false,3<8->true
 * write this in code
 */

function findSmallestNumber(arr) {
  let smallestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallestNumber > arr[i]) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}
const result = findSmallestNumber([3, 4, 5, 1, 8]);
console.log(result);

/**
 * Find the largestNumber in array [3, 4, 5, 1, 8]
 * let assume arr[0] is lagerstNumber
 * ->apply the loop so you can get the index of
 * ->after that if comapre the largestNumber to arr[i] if the number is greterThan
 * ->then assign that number to arr[i] and return the largestNumber
 */

function findTheLargestNumber(arr1) {
  let largestNumber = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (largestNumber < arr1[i]) {
      largestNumber = arr1[i];
    }
  }
  return largestNumber;
}
const result1 = findTheLargestNumber([3, 4, 5, 1, 8]);
console.log(result1);

/**
 *  arr2[1,2,3,5]
 * ->first loop that
 * ->add all arr[i] then store in variable sum
 */

function addAllNumber(params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    sum = params[i] + sum;
  }
  return sum;
}
const result2 = addAllNumber([1, 2, 3, 5]);
console.log(result2);
/**
 * find the value is given in array or not
 * [-5,2,6,1,0]->2=1index
 * 10->-1index bcz it is not avilable
 * ->used one loop then arr3[i]==target if it is equal then return arr3[i] otherwise return -1
 */

function findIndexOfInteger(arr3, target) {
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] == target) {
      return arr3[i];
    }
    return -1;
  }
}
const result3 = findIndexOfInteger([1, 2, 3, 5], 0);
console.log(result3);

/**
 * arr4[1,5,7,8,9,10,1,17,16]
 * if arr4[0]=duplicateInteger then apply the loop if the arr4[0] is eual to arr4[i]
 * then create one temp variable and store in that
 */

function findDuplicateInterger(arr4) {
  let duplicateInterger = arr4[0];
  let temp = [];
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] == duplicateInterger) {
      temp.push(arr4[i]);
    }
  }
  return temp;
}
const result4 = findDuplicateInterger([1, 5, 7, 8, 9, 10, 1, 17, 16]);
console.log(result4);

/**
 *
 * @param {*} arr5
 * in this try with two loop
 * ->first start with i=0
 * ->second start with j=1
 * ->check with arr5[i]==arr5[j] if both are eual store in temp variable and return that
 */

function anotherWayTofindDuplicateInterger(arr5) {
  let temp1 = [];
  for (let i = 0; i < arr5.length; i++) {
    for (let j = 1; j < arr5.length; j++) {
      if (arr5[i] == arr5[j]) {
        temp1.push(arr5[i]);
      }
    }
    return temp1;
  }
}
const result5 = anotherWayTofindDuplicateInterger([
  1, 5, 7, 8, 9, 10, 1, 17, 16, 18, 3, 18, 4, 3,
]);
console.log(result5);
