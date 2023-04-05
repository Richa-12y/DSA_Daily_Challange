/**
 * When function pass to the another function as an arugment it is called callback function
 * let see the exmaple
 */

function postiveNumber(x) {
  return x > 0 ? true : false;
}

function searchForPositiveNumber(arr, callback) {
  let positive = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      positive.push(arr[i]);
    }
  }
  return positive;
}
console.log(searchForPositiveNumber([1, -2, -7, 5, -4], postiveNumber));

/**
 * Another way to do the function call but this is not recommendted but if
 * u have small task to do u can pass annomous function just lke map filtter
 */
function searchForPositiveNumber(arr, callback) {
  let positive = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      positive.push(arr[i]);
    }
  }
  return positive;
}
console.log(
  searchForPositiveNumber([9, -2, -7, 4, -4], (x) => (x > 0 ? true : false))
);

/**
 * after having good knowledge on callback let's create our own map method like how array.map work
 */

function createOwnMap(arr1, callback) {
  let storeMapValue = [];
  for (let i = 0; i < arr1.length; i++) {
    storeMapValue.push(callback(arr1[i]));
  }
  return storeMapValue;
}
console.log(createOwnMap([1, 2, 3, 10], (el) => el * 2));

function createOwnFilter(arr1, callback) {
  let storeMapValue = [];
  for (let i = 0; i < arr1.length; i++) {
    if (callback(arr1[i])) storeMapValue.push(arr1[i]);
  }
  return storeMapValue;
}
console.log(createOwnFilter([1, 10, 3, 10], (el) => (el == 10 ? true : false)));
/**
 * Object.entries() returns an array of the key/value pairs in an object:
 */

const myDetails = {
  name: "Richa",
  lastName: "Singh",
  jobDesc: "Fullstack Developer",
};

let checkDetails = Object.entries(myDetails);

console.log(checkDetails);
/**
 * Object.values() are similar to Object.entries(), but returns a single dimension array of the object values:
 */
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let text = Object.values(person);
console.log(text);
/**
 * Object.keys() it will be return key value
 */

const informationPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let textCheck = Object.keys(informationPerson);
console.log(textCheck);
/**
 * JavaScript Array flat()
 */
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [8, 9],
];

const checkArray = myArr.flat();
console.log(checkArray);
/**
 * JavaScript Object fromEntries() it will convert array to object form
 */

const userDetails = [
  ["name", "Arya"],
  ["lastName", "Kayra"],
  ["jobDesc", "Pilot"],
];

let resultCheck = Object.fromEntries(userDetails);
console.log(resultCheck);
