const testData = "Read More";
console.log(testData.padEnd(15, "."));

const testData1 = "abc";
console.log(testData1.padStart(6));
console.log(testData1.padStart(6, 12345));

const fullNumber = "20347656567657";
const last4Digit = fullNumber.slice(-4);
console.log(last4Digit);
const result = last4Digit.padStart(fullNumber.length, "*");
console.log(result);
