// Promise Consumers
// Promises can be consumed by registering functions using .then and .catch methods

var promise = new Promise(function (resolve, reject) {
  const x = "good evening";
  const y = "good evening";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});
promise
  .then(function () {
    console.log("Success, You are a GEEK");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });

//Example: Promise Resolved
var promise = new Promise(function (resolve, reject) {
  resolve("Geeks For Geeks");
});

promise.then(
  function (successMessage) {
    //success handler function is invoked
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);

//Examples: Promise Rejected
var promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected");
});

promise.then(
  function (successMessage) {
    console.log(successMessage);
  },
  function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  }
);
