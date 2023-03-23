function closeStrings(word1, word2) {
  let tempone = [];
  let temptwo = [];

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] != word2[j]) {
        tempone.push(word1[i]);
        temptwo.push(word2[j]);
      }
    }
  }
  console.log(tempone);
  console.log(temptwo);
  if (tempone.length === temptwo.length) {
    return true;
  } else {
    return false;
  }
}
console.log(closeStrings("cabbba", "abbccc"));
