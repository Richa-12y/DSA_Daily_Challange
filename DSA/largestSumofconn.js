/**
 * [1,2,3,4,3,5,4,6,7,8]=>total element -10
 * count largest sum of consecutive digits
 * num=4
 * sum=>25->max value
 */
/**
 * condition
 * logic i will apply
 * 1+2+3+4=10->1
 * 2+3+4+3=12->2
 * 3+4+3+5=15->3
 * 4+3+5+4=16->4
 * 3+5+4+6=18->5
 * 5+4+6+7=22->6
 * 4+6+7+8=25->7
 * we have to find the logic
 * so total no of element in side array is 10
 * it will goes till 7 times foure foure digits
 * if we apply like total no of elemnt is 10 and 4 is repete
 * 10-4=6 but we get that 7 times so what we do we add 1 it will 7
 * so logic will be
 * total no of element-consecutive digits+1
 */

function largconsecutiveSum(array, num) {
  if (num > array) {
    throw new Error("number is not greater than zero");
  } else {
    let maxNumber = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let tempNumber = 0;
      for (let j = 0; j < num; j++) {
        // console.log(num);
        tempNumber = tempNumber + array[i + j];
      }
      if (tempNumber > maxNumber) {
        maxNumber = tempNumber;
      }
    }
    return maxNumber;
  }
}
const results = largconsecutiveSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(results);
