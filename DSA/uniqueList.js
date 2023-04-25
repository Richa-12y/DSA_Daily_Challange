function repetValueCount(arr) {
  let temp = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) {
      continue;
    }
    temp.push(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
  }

 return 
}
repetValueCount([3, 1, 3, 6, 7, 5, 4, 1, 10, 9, 12, 13, 11, 1, 9]);
