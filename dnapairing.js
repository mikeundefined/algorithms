/*
Michael Nathan 10/7/2018
Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let array = str.split("");
  let newArray = [];
  let insert = '';
  for (let x = 0; x < str.length; x++) {
    if (array[x] === 'G') { insert = 'C'; }
    else if (array[x] === 'C') { insert = 'G'; }
    else if (array[x] === 'A') { insert = 'T'; }
    else if (array[x] === 'T') { insert = 'A'; }
    newArray.push([array[x], insert]);
  }
  return newArray;
}

pairElement("GCG");
