// let arr = [5, 6, 2, 9, 8, 3, 12, -15];

// let result = arr
//   .map((el) => el)
//   .reduce((first, second) => {
//     return first + second;
//   });

// console.log(result);

// let a = [1, 5, 3, "a", "b", null, 5, undefined, null];
//output->[1,5,3,"a","b"]

let a = [1, 5, 3, "a", "b", null, 5, undefined, null];

// let result = a.filter((el) => el !== null && el !== undefined);
let result = a.filter(Number);
console.log(result);

let array = [
  "aa",
  "bb",
  "cc",
  "aa",
  "bb",
  "cc",
  11,
  33,
  4,
  7,
  11,
  22,
  33,
  7,
  "richa",
  "richa",
];

frequency = {};

for (let i = 0; i < array.length; i++) {
  if (!frequency[array[i]]) {
    frequency[array[i]] = 1;
  } else {
    frequency[array[i]]++;
  }
}
console.log(frequency);

let fgh = ["aghf", "kkj", "ll", 55, 55, 11, 55];

let gh = Array.from(new Set(fgh));
console.log(gh);
const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
  { name: "richa", grade: 0 },
];

const studentResult = students.sort((a, b) => a.grade - b.grade);
console.log(studentResult);

const Data = [
  ["first", "Richa"],
  ["id", "1"],
];

const newResult = Object.fromEntries(Data);
console.log(Data);
