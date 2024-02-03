/**
 * Input: s = “geeks quiz practice code” 
   Output: s = “code practice quiz geeks”

 */

function Reversewords(str) {
  let reverThewword = str.split(" ").reverse().join(" ");
  console.log(reverThewword);
}
Reversewords("geeks quiz practice code");

/**
 * Input: “adsjfdsfsfjsdjfhacabcsbajda”
 * Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }
 */

function checkTheOcc(params) {
  let result = [...params];
  //   console.log(result);
  let temp = [];
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) {
        temp.push(result[i]);
      }
    }
    return temp;
  }
}
console.log(checkTheOcc("adsjfdsfsfjsdjfhacabcsbajda"));
