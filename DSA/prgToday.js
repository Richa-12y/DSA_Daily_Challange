/**
 * 1.Given an array of elements, separate the odd and even elements.
 * [20,2,8,9,7,5,2,3,15]->even->20,2,8,2 odd->3,15,7,9
 * firstk apply the loop so you can the index of each element then
 * did the indec of to /2 if remineder is zero that is even otherwise odd
 * create tow  temp varilabe one for odd data one for even puch on that
 * after that return that data
 */

function separateEvenOdd(arr) {
  let evenNumber = [];
  let odNumber = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNumber.push(arr[i]);
    } else {
      odNumber.push(arr[i]);
    }
  }
  console.log(evenNumber);
  console.log(odNumber);
}
separateEvenOdd([20, 2, 8, 9, 7, 5, 2, 3, 15]);
/**
 * How would you get the duilicate of elements?
 * [10,11,7,3,8,10,11,10,15,10]
 *  will take two(i,j) loop
 * then check arr[i] with arr[j] if both are equal in side duplicated
 *  varible store
 *use i+1 to avoid comparing elements twice
 * */

function duplicateValue(arr1) {
  let storeDuplicateValue = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] == arr1[j]) {
        storeDuplicateValue.push(arr1[i]);
        break; // break after finding the first duplicate
      }
    }
  }
  return storeDuplicateValue;
}
console.log(duplicateValue([10, 11, 7, 3, 8, 10, 11, 10, 15, 10]));

/**
 * 2.How would you count the frequency of elements?
 * apply the loop create one frquncy object in that we will store all value
 * check with index of present in freque or not
 */

function frequencyOfElements(params) {
  let frequency = {};
  for (let i = 1; i < params.length; i++) {
    if (params[i] in frequency) {
      frequency[params[i]] = frequency[params[i]] + 1;
    } else {
      frequency[params[i]] = 1;
    }
  }
  return frequency;
}
console.log(frequencyOfElements([10, 11, 7, 3, 8, 10, 11, 10, 15, 10]));

/**
 * 3.Write a program to find a missing number in an array  between 10 to 30;
 * [15,18,21,25,29,12]
 * Create a variable to hold the missing number
 */
function checkMissingNum(arr2) {
  let missingValue = [];
  for (let i = 10; i < 30; i++) {
    if (!arr2.includes(i)) {
      missingValue.push(i);
    }
  }
  return missingValue;
}
console.log(checkMissingNum([15, 18, 21, 25, 29, 12]));

/**
 * find all pairs in an array of integers whose sum equals a number given?
 * [2,3,5,7,9] target=9
 * -apply the two loop arr3 after that arr3[i]+arr3[j]==target
 * then return that value
 */

function findPairValue(arr3, target) {
  for (let i = 0; i < arr3.length; i++) {
    for (let j = 1; j < arr3.length; j++) {
      if (arr3[i] + arr3[j] == target) {
        return [arr3[i], arr3[j]];
      }
    }
  }
}
console.log(findPairValue([2, 3, 5, 7, 9], 9));

/**
 * Write a program to compare whether two arrays are equal in size or not
 * [2,3,5,7,9][1,2,3,4,5]
 * if check the length both are equal then
 */
function checkLength(par1, par2) {
  return par1.length === par2.length;
}
console.log(checkLength([2, 3, 5, 7, 9], [1, 2, 3, 4, 5]));
console.log(checkLength([2, 3, 5, 7, 9], [2, 3, 5, 7, 9]));

/**
 * How would you find the largest and smallest numbers in the array?
 * [2, 3, 5, 7, 9]->first apply the loop
 * first let suppose smallestNumber=arr3[0]
 * after that apply the loop then will check in if block if smallestNumber number is smaller than arr3[i]
 * then we return that value
 */

function forSmallestNumber(params) {
  let smallestNumber = params[0];
  for (let i = 0; i < params.length; i++) {
    if (smallestNumber > params[i]) {
      smallestNumber = params[i];
    }
  }
  return smallestNumber;
}
console.log(forSmallestNumber([2, 3, 5, 7, 9]));
