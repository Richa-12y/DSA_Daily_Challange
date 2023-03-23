// let str='RICHA';
// // console.log(...str)
// let [firstLetter,...restLetter]=str
// // console.log(firstLetter);
// // console.log(restLetter);

// let joinRestLetter=restLetter.join('')
// console.log(joinRestLetter)

// let convertjoinRestLetter=joinRestLetter.toLocaleLowerCase()
// console.log(convertjoinRestLetter)

// let addAfterChange=`${firstLetter}${convertjoinRestLetter}`
// console.log(addAfterChange)

// let str_one='you are beautiful'
// let splitstr_one=str_one.split(' ')
// // console.log(splitstr_one)

// // for(let i=0;i<splitstr_one.length;i++){

// //      let [firstLetter,...restLetter]=splitstr_one[i]
// // //      console.log(firstLetter)
// // //     console.log(restLetter)
// //       let str=`${firstLetter.toUpperCase()}${restLetter.join('')}`
// //       splitstr_one[i]=str
// //      //  console.log(str)

// // }
// // console.log(splitstr_one.join(' '))

// let name = 'richa';
// let capFirstLetter=name[0].toUpperCase()
// // console.log(capFirstLetter);

// let restOfNameAlb = name.slice(1);

// // console.log(restOfNameAlb);
// let addAfterChange=`${capFirstLetter}${restOfNameAlb}`

// console.log(addAfterChange)

// function capFirst(name) {
//      return name[0].toUpperCase() + name.slice(1);
//  }

// console.log(capFirst('richa'));//Output:-Richa

let dreamBig = "excuses will turn your dreams into dust";
let splitdreamBig = dreamBig.split(" ");
// console.log(splitdreamBig)

let words = splitdreamBig.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});
console.log(words.join(" "));

function capFirstLetterInSentence(sentence) {
  let words = sentence.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}

console.log(
  capFirstLetterInSentence("excuses will turn your dreams into dust")
);
//I Am Learning How To Code
