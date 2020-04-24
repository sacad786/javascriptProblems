/*An input string can be completed if additional letters can be added and no letters need to be taken away
 to match the word. Furthermore, the order of the letters in the input string must be the same as the order 
 of letters in the final word.

Create a function that, given an input string, determines if the word can be completed.

Examples
canComplete("butl", "beautiful") ➞ true
// We can add "ea" between "b" and "u", and "ifu" between "t" and "l".

canComplete("bult", "beautiful") ➞ false
// "z" does not exist in the word beautiful.

canComplete("tulb", "beautiful") ➞ false
// Although "t", "u", "l" and "b" all exist in "beautiful", they are incorrectly ordered.

canComplete("bbbbutl", "beautiful") ➞ false
// Too many "b"s, beautiful has only 1.

Notes
Both string input and word will be lowercased.*/

function canComplete(inCompleteWord,completeWord) {
    let inCompleteWordArray = inCompleteWord.split("")
    let indexOffoundCharacttors =  []

    for (let i = 0; i < inCompleteWordArray.length; i++) {
        if(!(completeWord.includes(inCompleteWordArray[i]))){
            return false
        }
        let n = indexOffoundCharacttors.push(completeWord.indexOf(inCompleteWordArray[i]));
        
        if (!ff(inCompleteWordArray[i],inCompleteWord,completeWord)){
            return false
        }
    }

    for (let i = 0; i < indexOffoundCharacttors.length; i++) {
        if(indexOffoundCharacttors[i] > indexOffoundCharacttors[i+1]){
            return false
        }
    }
    return true
}

console.log(canComplete("butl", "beautiful")) // true
console.log(canComplete("bult", "beautiful")) // false
console.log(canComplete("tulb", "beautiful")) // false


function ff(character, inCompleteWord, completeWord){
    let inCompleteWord = (inCompleteWord.match(new RegExp(character,'g')).length);
    let completeWord = (completeWord.match(new RegExp(character,'g')).length);
    return inCompleteWord <= completeWord
}