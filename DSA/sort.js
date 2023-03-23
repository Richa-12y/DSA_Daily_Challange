const userDetails = [
  {
    name: "Ashu",
    age: 27,
  },
  {
    name: "Bhanu",
    age: 18,
  },
  {
    name: "Shanu",
    age: 23,
  },
  {
    name: "Richa",
    age: 25,
  },
  {
    name: "Kayra",
    age: 10,
  },
];

let findOrder = userDetails.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (b.name > a.name) {
    return -1;
  } else {
    return 0;
  }
});
console.log(findOrder);

const arry = [10, 11, 13, 15, 0, 5, 15];
let findsmallest = arry.sort((a, b) => a - b);
console.log(arry);

const myDetails = [
  {
    myname: "Richa Singh",
    course: "c",
  },
  {
    myname: "Sashi Singh",
    course: "d",
  },
  {
    myname: "adil ashu",
    course: "a",
  },
];

let dotheorderwise = myDetails.sort((a, b) => {
  if (a.course > b.course) {
    return 1;
  } else if (a.course < b.course) {
    return -1;
  } else {
    return 0;
  }
});
console.log(dotheorderwise);
