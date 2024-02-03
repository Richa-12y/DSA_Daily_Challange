const person = {
  name: "John",
  age: 30,
  address: { city: "New York", country: "USA" },
};

const {
  name,
  age,
  address: { city, country },
} = person;

const modiObj = {
  name: "reone rajput",
  age,
  address: { city: "Purnea", country: "India" },
};

console.log(modiObj);
// const {
//   name,
//   address: { city, country = "india" },
// } = person;
// const modifiedPerson = { name, address: { city, country: "India" } };

// console.log(modifiedPerson);

// console.log(name); // Output: John
// console.log(city); // Output: New York
// console.log(country); // Output: USA

console.log(person);

