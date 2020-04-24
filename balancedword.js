/*We can assign a value to each character in a word, based on their position
in the alphabet (a = 1, b = 2, ... , z = 26).
A balanced word is one where the sum of values on the left-hand side of the word equals
the sum of values on the right-hand side. For odd length words, 
the middle character (balance point) is ignored.

Write a function that returns true if the word is balanced, and false if it's not.

Examples
balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
Notes
All words will be lowercase, and have a minimum of 2 characters.
Palindromic words will always be balanced.*/

function balanced(word) {
    return (word.length < 1) ? "word should be more than 1 characters" : calc(word)
}

function calc(word) {
 let middle = Math.floor(word.length / 2);;
  let middle2;

  if (word.length % 2 == 0) {
    middle2 = Math.floor(word.length / 2);
  } else {
    middle2 = Math.floor(word.length / 2) + 1;
  }

  let leftPartOfString = word.substr(0, middle);
  let rightPartOfString = word.substr(middle2);

  let leftTotal = 0
  let rightTotal = 0

  for (i = 0; i < leftPartOfString.length; i++) {
    leftTotal += getNumberOfCharacter(leftPartOfString[i]);
  }

  for (i = 0; i < rightPartOfString.length; i++) {
    rightTotal += getNumberOfCharacter(rightPartOfString[i]);
  }

  return leftTotal === rightTotal
}


// console.log("expecting  true");
console.log(balanced("zips"))

// console.log("expecting  false");
console.log(balanced("brake"))


// console.log("expecting  false");
// console.log(balanced("aztaz"))


function getNumberOfCharacter(character) {
    let aa = {
      a: 1, b: 2, c: 3, d: 4, e: 5,
      f: 6, g: 7, h: 8, i: 9, j: 10,
      k: 11,l:12, m: 13,n: 14,o: 15,
      p: 16,q: 17,r: 18,s: 19,t: 20,
      u: 21,v: 22,w: 23,x: 24,y: 25,
      z: 26,
    }
    return aa[character]
  }

