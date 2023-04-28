const words = [
  "jiji",
  "hello",
  "watermelon",
  "rejection",
  "success",
  "no",
  "Yes",
  "welcome",
  "o",
];

function findShortesWord(arr) {
  return arr.reduce((currentValue, shortestValue) => {
    if (currentValue.length < shortestValue.length) {
      return currentValue;
    } else {
      return shortestValue;
    }
  }, arr[0]);
}
console.log(findShortesWord(words));
