/*Write a function that takes in a string and for each character, 
returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.*/

function distanceToNearestVowel(str) {
  let strArr = str.split("")
let count = 0;
let vowels = ['a', 'e', 'i', 'o', 'u']
for(i=0; i<strArr.length; i++){
  console.log("strArr[i] is " + strArr[i] + " strArr[i+1] is " + strArr[i+1]);
   
    if(vowels.includes(strArr[i]) ){
        strArr[i] = 0
    }else if (!(vowels.includes(strArr[i]))) {
      strArr[i] = 1
      if (strArr[i] != strArr[i+1]) {
        
      }
    }

}

return  strArr

}

console.log(distanceToNearestVowel("shopper"))
console.log(distanceToNearestVowel("afdfaziyaad"))
[ ]
let posOfCurrnetChar = 0
let posiOFNextVowel = getPosNextVowel(posOfCurrnetChar, str)
let posiOFPreviousVowel = getPosPreviousVowel(posOfCurrnetChar, str)

let pre = posOfCurrnetChar -posiOFPreviousVowel
let next = posiOFNextVowel - posOfCurrnetChar
\
retun min(pre, next)





