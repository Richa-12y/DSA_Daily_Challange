const num1 = 1_000_000_000;
const num2 = 1000000000;
console.log(num1 === num2);

let x = 9999999999999999;
let y = 9999999999999999n;
console.log(x === y);

let x1 = 1234567890123456789012345n;
let y1 = BigInt(1234567890123456789012345);

/**
 * The Nullish Coalescing Operator (??) The ?? operator returns the first argument if it is not nullish (null or undefined).Otherwise it returns the second.
 */

let name = null;
let textHeading = "bollowoodsong song 2022";
let result = name ?? textHeading;
console.log(result);
/**
 * The Optional Chaining Operator (?.)The Optional Chaining Operator returns undefined if an object is undefined or null (instead of throwing an error).
 */
const car = { type: "Fiat", model: "500", color: "white" };
let resultOne = car?.name;
console.log(resultOne);

function nonRepeatedChar(str) {
  const freq = {};
  // count the frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  // find the first non-repeated character
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  // if no non-repeated character is found, return null
  return null;
}

console.log(nonRepeatedChar("abcabce")); // Output: "e"
