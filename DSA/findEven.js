/**
 * Write a program to print all the even numbers in an array.
 * [6,9,15,17,18,4]->if it is diveded by two then some rest number is odd
 */

function findEven(arr) {
  let evenStore = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenStore.push(arr[i]);
    }
  }
  return evenStore;
}
console.log(findEven([6, 9, 15, 17, 18, 4]));

// /**
//  * .Write a program to print all the odd numbers in a given array.
//  * [6,9,15,17,18,4]->if it is not diveded by two then then odd number
//  *
//  /

function findOdd(arr) {
  let oddStore = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddStore.push(arr[i]);
    }
  }
  return oddStore;
}
console.log(findOdd([6, 9, 15, 17, 18, 4]));

/**
 * 12.Given two arrays, write a program to merge them
 * we acn used in this ... opertor
 */

function meragTwoArray(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result;
}
console.log(meragTwoArray([6, 9, 15, 17, 18, 4], [1, 15, 18, 19, 20, 8]));

/**
 * How would you empty an array in JavaScript?
 */
function emptyArray(params) {
  params.length = 0;
  return params;
}
console.log(emptyArray([6, 9, 15, 17, 18, 4]));

/**
 * .checked all value in two array are equall
 * ->[6, 9, 15, 17, 18, 4],[6, 9, 15, 17, 18, 4]
 *  we will check if arr1[i]===arr[j] then return arr[i]
 */

function checkTWoArrayEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return arr1;
      }
    }
  }
}
console.log(checkTWoArrayEqual([6, 9, 15, 17, 18, 4], [6, 9, 15, 17, 18, 4]));

/**
 * 15. store all elmemt starting with  s in a seprate array
 * // a=['shirt', 'tshirt','shoes',book','mobile']
 * output=['shirt','shoes']
 */
function elemWithStatingS(params) {
  let store = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i][0] === "s") {
      store.push(params[i]);
    }
  }
  return store;
}
console.log(elemWithStatingS(["shirt", "tshirt", "shoes", "book", "mobile"]));

const a = ["shirt", "tshirt", "shoes", "book", "mobile"];
const output = a.filter((element) => element.startsWith("s"));
console.log(output); // output=['shirt','shoes']
