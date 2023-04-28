const words =
  "The quick brown fox jumps over the lazy dog if the dog reacted,was it really lazy?";
/**
 * it will repce the first match
 * let checkResult = words.replace("dog", "Money");
 * but if you used regex ig it will check golabily and replace that i it will ignore capital and small letter
 */
const regex = /Dog/gi;
let checkResult = words.replace(regex, "Money");

console.log(checkResult);
