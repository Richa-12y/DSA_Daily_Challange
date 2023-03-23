/**
 * factorial of a n number
 * 4!->4*3*2*1=24
 * 5!->5*4*3*2*1=120
 */

function factorialNum(n) {
  let mul = 1;
  for (let i = n; i > 0; i--) {
    mul = mul * i;
  }
  return mul;
}
const results = factorialNum(5);
console.log(results);

function factNumber(num) {
  let tempValue = 1;
  for (let i = 2; i <= num; i++) {
    tempValue = i * tempValue;
  }
  return tempValue;
}
const checkResults = factNumber(0);
console.log(checkResults);
