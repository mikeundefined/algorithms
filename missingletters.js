/*
Michael Nathan 10/7/2018
Intermediate Algorithm Scripting: Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".

fearNotLetter("abcdefghjklmno") should return "i".

fearNotLetter("stvwx") should return "u".

fearNotLetter("bcdf") should return "e".

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/

function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetArray = alphabet.split("");
  let start = 0;
  let missingLetter;

  let strArray = str.split("");

  for (let x = 0; x < alphabet.length; x++) {
    if (alphabetArray[x] === strArray[0] ) {
      start = x;
      break;
    }
  }

  for (let y = 0; y < str.length; y++) {
    if (alphabetArray[start + y] != strArray[y]) {
      missingLetter = alphabetArray[start + y];
      break;
    }
  }
  return missingLetter;
}

fearNotLetter("stvwx");
