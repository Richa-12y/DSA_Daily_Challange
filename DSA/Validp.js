/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * first we have to check with the foor loop after that we have to apply the if conditiones that is avialbe or not in the map if it is aviali we have to push that in side
 * empty array if
 */

function ValidP(s) {
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stck = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(s);
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stck.push(s[i]);
    } else if (stck[stck.length - 1] === map[s[i]]) {
      stck.pop();
    } else return false;
  }
  return stck.length === 0;
}
console.log(ValidP("(]"));
//F(n) = F(n-1) + F(n-2)

function fibonacciSeqIndex(n) {
  let findIndex = [0, 1];
  for (let i = 2; i < n; i++) {
    // console.log(i);
    findIndex[i] = findIndex[i - 1] + findIndex[i - 2];
  }
  return findIndex;
}
console.log(fibonacciSeqIndex(5));

// function factorialRecursive(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorialRecursive(n - 1);
//   }
// }

// console.log(factorialRecursive(5));

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative(5));
