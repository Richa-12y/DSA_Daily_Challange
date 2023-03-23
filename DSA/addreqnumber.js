function seqOfNum(number) {
  while (`${number}`.length > 1) {
    number = `${number}`
      .split("")
      .map((el) => parseInt(el))
      .reduce((a, b) => a + b);
  }
  console.log(number);
}
seqOfNum(1234567);

function numberSum(params) {
  while (`${params}`.length > 1) {
    params = `${params}`
      .split("")
      .map((el) => parseInt(el))
      .reduce((a, b) => a + b);
  }
  console.log(params);
}
numberSum(123456798);
