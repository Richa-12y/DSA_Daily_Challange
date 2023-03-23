/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 * Input: strs = ["flower","flow","flight"]
Output: "fl"

 */

function findShortesStrinInArray(array) {
  let length = array[0].length;
  let Index = 0;
  for (let i = 0; i < array.length; i++) {
    let temp = array[i].length;
    if (temp < length) {
      length = temp;
      Index = i;
    }
  }
  return Index;
}

const getAllPrefix = (strData) => {
  let prefixArray = [];

  for (let i = 0; i < strData.length; i++) {
    let tempData = "";

    for (let j = i; j < strData.length; j++) {
      tempData = tempData + strData[j];
      prefixArray.push(tempData);
    }
  }

  return prefixArray;
};

function longestPrefix(array) {
  let min = findShortesStrinInArray(array);

  let prefix = getAllPrefix(array[min]);

  let result = "";
}
longestPrefix(["flower", "flow", "flight"]);

function long(params) {
  let temp = [];
  let results = 0;
  for (let i = 0; i < params.length; i++) {
    // console.log(params[i]);
    temp = params[i].slice(0, 2);
    // console.log(temp);
    results = params[i].includes(temp);
    // console.log(results);
  }
  return results;
}
const check = long(["flower", "flow", "flight"]);
console.log(check);

/**
 *
 * it will check the length
 */
function longestCommonPrefix(strs) {
  if (!strs.length) {
    return "";
  }
  for (let i = 0; i <= strs[0].length; i++) {
    // console.log(strs[0][i]);
    for (let j = 1; j < strs.length; j++) {
      // console.log(strs[j][i]);
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}
const checkResult = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(checkResult);
