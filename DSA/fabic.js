/**
 * given number 'n' find the first 'n' elements of the fibonacci sequeces
 * [0,1,1,2,3,5,8,13,21]->if told find the next value in given  array then this is correct
 * 0+1=1
 * 1+1=2
 * 1+2=3
 * 3+5=8
 * 8+13=21
 * 13+21=?=34 n=9
 * f9=f(n-1)+f(n-2)=f8+f7=13+21=
 * another problem if no is given 7 then assked fibonacciseq in that situation we have to find the idex valur
 * no->8
 * feb seq->[0,1] [0,1,1][0,1,2][0,1,2,3][0,1,2,3,5]
 */

function fibonacciSeq(array) {
  let temp = [];
  for (let i = 0; i <= array.length; i++) {
    temp = array[array.length - 1] + array[array.length - 2];
  }
  return temp;
}
const result = fibonacciSeq([0, 1, 1, 2, 3, 5, 8, 13, 21]);
console.log(result);
//formula->fib(n-1)+fib(n-2)->
function fibonacciSeqIndex(n) {
  let findIndex = [0, 1];
  for (let i = 2; i < n; i++) {
    // console.log(i);
    findIndex[i] = findIndex[i - 1] + findIndex[i - 2];
  }
  return findIndex;
}
console.log(fibonacciSeqIndex(5));
