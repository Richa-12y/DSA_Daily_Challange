// /**
//  * currying function is used for avoid passing a varibles again and again
//  * to create higher oder function to make your function pure
//  */
// function mul(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a * b * c * d;
//       };
//     };
//   };
// }
// console.log(mul(2)(3)(2)(2));

// /**
//  * Infinit currying
//  * add(5)(2)(4)()
//  */
// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }
// console.log(add(2)(3)(2)(7)(6)());
// /**
//  * Object
//  */
// var obje1 = { n: 1 };
// var obje2 = obje1;
// obje2.n = 2;
// console.log(obje1);

// function positveValue(x) {
//   return x > 0 ? true : false;
// }

// function findValue(arr, callback) {
//   let findValuePositive = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       findValuePositive.push(arr[i]);
//     }
//   }
//   return findValuePositive;
// }
// console.log(findValue([1, -5, 4, 7, -9], positveValue));

function fistSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(-arr[i])) {
      return [arr[i], -arr[i]];
    }
  }
}
let result = fistSumZero([3, 5, 1, 6, -1, -4, 10]);
console.log(result);
/**
 * hello->h=1e=1l=2o=1
 * hlleo
 */
