// const fruits = [
//   { Apple: 4, Orange: 7, Grape: 3 },
//   { Guava: 6, Lemone: 4, Banana: 8 },
//   { Orange: 8, PineApple: 7, Apple: 7 },
// ];
// let head = [1, 2, 2, 1];

// function reverthearry(head) {
//   let newresult = [...head].reverse();
//   // console.log(head);
//   // console.log(newresult);
//   for (let i = 0; i < head.length; i++) {
//     for (let j = 0; j < newresult.length; j++) {
//       if (head[i] === newresult[j]) {
//         return true;
//       }
//     }
//   }
// }

// reverthearry(head);
function muly(a, b) {
  let ans = a;
  // console.log(ans);
  for (i = 0; i < b - 1; i++) {
    ans = ans + a;
    // console.log(ans);
  }
  return ans;
}
console.log(muly(5, 3));
