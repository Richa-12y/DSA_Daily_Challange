const str='121'
const newstr=str.split('')
// console.log(newstr)
const reversenewstr=newstr.reverse()
// console.log(reversenewstr)
const jointhestr=reversenewstr.join('');
// console.log(jointhestr)

     if(str==jointhestr){
          console.log('this is palindrome')
     }
     else{
          console.log('this is not palindrome')

     }


    //reverse the string without inbuild method
    let data='man';
    let splitdata=data.split('')
//     console.log(splitdata)
    for(let i=0;i<=data.length/2;i++){
         let temp=splitdata[i]
        splitdata[i]=splitdata[splitdata.length-1-i]
        splitdata[splitdata.length-1-i]=temp; 
    }
     let result=splitdata.join('')
     console.log(result)
     if(result===data){
          console.log('this is palindrom')
     }
     else{
          console.log('this is not palindrom')

     }
//let reverse the array

let arr='121'
let splitarr=arr.split('')
// console.log(splitarr)
for(let i=0;i<=arr.length/2;i++){
     let newtemp=splitarr[i]
     newtemp[i]=splitarr[splitarr.length-1-i]
     splitarr[splitarr.length-1-i]=newtemp;
}
let news=splitarr.join('')
console.log(news)
if(news===arr){
     console.log('this is palindrom number')
}
else{
     console.log('this is not palindrom number')

}

//try with descture method
const arrone=[123];
const arrcoverintostring=arrone.join('')
// console.log(arrcoverintostring)
const createNewArry= [...arrone]
const covertNewArrayToString=createNewArry.join('');
// console.log(covertNewArrayToString.split('').reverse().join(''))
const trystr=covertNewArrayToString.split('').reverse().join('')
// console.log(trystr);
if(arrcoverintostring===trystr){
     console.log('palindrome')
}else{
     console.log('not palindrome')

}
const str2='man'
let result1 = str2.split('').reverse().join('') ===str2?"palidrone":"not a palidrone"

console.log(result1)