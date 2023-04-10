/**
 * currying function is used for avoid passing a varibles again and again
 * to create higher oder function to make your function pure
 */
function mul(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a * b * c * d;
      };
    };
  };
}
console.log(mul(2)(3)(2)(2));

/**
 * Infinit currying
 * add(5)(2)(4)()
 */
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(2)(3)(2)(7)(6)());
/**
 * Object
 */
var obje1 = { n: 1 };
var obje2 = obje1;
obje2.n = 2;
console.log(obje1);
