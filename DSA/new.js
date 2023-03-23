const arr = ["shanu", "bhani", "richa"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/**
 * Check some of two no is '0'
 * [-5,-4,-3,-2,0,2,4,6,8]->input
 * apply the fisrt for loop for outer loop and start the index is 0
 * apply the second loop for inner data and start the index for 1
 * [-4,4] -4+4=0
 */

function getSomePairZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}
let results = getSomePairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]); //o(o^n2) quadratic time copexcity
console.log(results);

//another solution

/**
 * Check some of two no is '0'
 * [-5,-4,-3,-2,-35,0,2,4,6,8,10]->input
 * [-35,10] -35+10=25
 */
