/**
 * prime nu
 * 1,2,3,5
 */

function primeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // console.log(i);
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}
const results = primeNumber(7);
console.log(results);

function outerFunction() {
  var a = 20;
  var b = 20;
  function innerFunction() {
    var sum = a + b;
    console.log(sum);
  }
  innerFunction();
}
outerFunction();

//funcation pass another function as a arugments is called as callback

function print1(callback) {
  console.log("Hi everyone");
  callback();
}
function print2() {
  console.log("How you doing?");
}
print1(print2);
