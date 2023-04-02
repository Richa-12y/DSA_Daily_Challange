let array = [
  "shanu",
  "kumar",
  "bhanu",
  "kumar",
  "richa",
  "shanu",
  "natik",
  "shanu",
  "richa",
];

//output ['shanu','kumar','bhanu',1,'richa',0,'natik',0,3]

const uniqueArray = (list) => {
  let uniqueList = [];
  let result = [];

  list.forEach((item, i) => {
    if (uniqueList.includes(item)) {
      result.push(uniqueList.indexOf(item));
    } else {
      uniqueList.push(item);
      result.push(item);
    }
  });
  return result;
};
console.log(uniqueArray(array));
