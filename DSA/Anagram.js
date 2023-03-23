/**
 * String Anagram
 * hello->'llheo' diffrenet number of arrange
 */

/**
 * first check the length both string have equal length or not
 * if length is equal satified first contaion and this is angarm
 * second we will check the repeation of alphabet
 * {h:1,e:1,l:2,o:1}
 * third we dec the -1 to in objec which is reptet so in another string h=1 then it will 1-1=0
 * so that object will be
 * {h:0,e:0,l:0,o:0}
 */

function isAnagram(string1, string2) {
  //it will check length both length is equal or not
  if (string1.length != string2.length) {
    return false;
  }
  //here we create temp var object to count the alp
  let counter = {};
  //get the string1 alph using for loop
  for (let i = 0; i < string1.length; i++) {
    // console.log(string1[i]);
    //if you write this counter[string1[i]] = counter[string1[i]] it will give u undefine value
    //for remove undefine we used or opertor 0 it will replace the undefine to 0
    counter[string1[i]] = (counter[string1[i]] || 0) + 1;
    // console.log(counter[string1[i]]);
  }
  //   console.log(counter);
  //here is logic for string
  for (let j = 0; j < string2.length; j++) {
    if (!counter[string2[j]]) {
      return false;
    }
    counter[string2[j]] -= 1;
  }
  return true;
}
const check = isAnagram("hello", "llheo");
console.log(check);
