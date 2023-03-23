const users = [
  { password: "Ram123", email: "ram@gmail.com", id: 11 },
  { password: "Shyam123@", email: "shyam23@gmail.com", id: 5 },
  { password: "John123@", email: "john@gmail.com", id: 3 },
  { password: "Bob324@", email: "bob32@gmail.com", id: 9 },
];

function isUserExits(array, val) {
  for (let items of array) {
    console.log(items["email"]);
    if (items["email"] === val) {
      return true;
    }
  }
  return false;
}
const result = isUserExits(users, "ram@gmail.com");
console.log(result);
