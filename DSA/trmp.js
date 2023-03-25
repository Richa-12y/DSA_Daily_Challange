/**
 * how to empty the array
 */

let a = [1, 2, 3, 4];
a.length = 0;
console.log(a);

//another way
let b = [1, 2, 3, 4, 5];
b.splice(0);
console.log(b);

//delet the value last 2 and add another value in that place
let c = [1, 2, 3, 4, 5];
c.splice(2, 3, 13);
console.log(c);
//desc way

let c1 = [1, 2, 3, 4, 5];
[c1, ...j] = c1;
console.log(j);
