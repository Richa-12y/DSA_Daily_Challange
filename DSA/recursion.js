/**
 * recursion->when function called itself that is recursion
 * otherwise it will get called as a infinted time
 * if a function call itself then there must be an end point
 */

let count = 1;
function demo(number) {
  if (count > number) {
    return;
  }
  console.log("how many times get print" + count);
  count++;
  demo(number);
}
demo(10);
