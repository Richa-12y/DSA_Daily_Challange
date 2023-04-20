let userDetails = {
  name: "Richa Singh",
  userId: 1,
  familyMemberage: [1, 4, 6, 10],
  listoffamile: {
    grandFather: "hari mohan singh",
  },
};

let result = {
  ...userDetails,
  name: "bhanu",
  familyMemberage: [2, 4, 5, 7],
  listoffamile: { grandFather: "jsfd" },
};

console.log(result);
