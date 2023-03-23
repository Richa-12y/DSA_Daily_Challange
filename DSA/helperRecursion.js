/**
 * helper resursive function
 * [1,2,3,4,5,6,7,8,9,10]
 * output->[1,3,5,7,9]
 * length->10
 * we apply the loop then if array[i]/2=is not equal to zero that element store in the temp var
 *
 */

function helperResu(array) {
  let tempdata = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      tempdata.push(array[i]);
    }
  }
  console.log(tempdata);
}
helperResu([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function findodd(arrayone) {
  let newvalue = [];
  function helperRes(params) {
    if (params.length === 0) {
      return;
    }
    if (params[0] % 2 !== 0) {
      newvalue.push(params[0]);
    }
    helperRes(params.slice(1));
  }
  helperRes(arrayone);
  return newvalue;
}
const res = findodd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);
