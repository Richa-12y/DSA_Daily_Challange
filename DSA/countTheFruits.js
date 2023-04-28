const fruits = [
  { Apple: 4, Orange: 7, Grape: 3 },
  { Guava: 6, Lemone: 4, Banana: 8 },
  { Orange: 8, PineApple: 7, Apple: 7 },
];

const countFrutes = {};

// fruits.forEach((element) => {
//   //   console.log(element);
//   for (value in element) {
//     // console.log(value);
//     if (countFrutes[value]) {
//       countFrutes[value] = countFrutes[value] + element[value];
//     } else {
//       countFrutes[value] = element[value];
//     }
//   }
// });

// console.log(countFrutes);

fruits.map((el) => {
  //   console.log(el);
  for (value in el) {
    // console.log(value);
    if (countFrutes[value]) {
      countFrutes[value] = countFrutes[value] + el[value];
    } else {
      countFrutes[value] = el[value];
    }
  }
});
console.log(countFrutes);
