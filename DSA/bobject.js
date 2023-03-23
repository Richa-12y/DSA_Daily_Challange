const userData = [
  { name: "Ashar", lastName: "Richa" },
  { name: "Rich", lastName: "Reone" },
  { name: "Riki", lastName: "Rakshit" },
];

// const newDatas = [...userData];
// console.log(newDatas, "without change the data");

// for (keys in userData) {
//   let value = userData[keys];
//   console.log(value);
// }

const result = Object.entries(userData).forEach(([key, value]) => {
  console.log(key, value);
});

const number = [10, 46, 77, 88, 56, 30, 35];
const passingNumber = 30;
for (const socre of number) {
  if (socre >= passingNumber) {
    console.log(socre);
  }
}
