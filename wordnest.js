/*A word nest is created by taking a starting word, and generating a new string
 by placing the word inside itself. This process is then repeated.

Nesting 3 times with the word "incredible":

start  = incredible
first  = incre|incredible|dible
second = increin|incredible|credibledible
third  = increinincr|incredible|ediblecredibledible
The final nest is "increinincrincredibleediblecredibledible" (depth = 3).

Given a starting word and the final word nest, return the depth of the word nest.

Examples
wordNest("floor", "floor") ➞ 0

wordNest("code", "cocodccococodededeodeede") ➞ 5

wordNest("incredible", "increinincrincredibleediblecredibledible") ➞ 3*/
// increinincrincredibleediblecredibledible
// find the given word = incredible
// counter = 1
// mynewLongStrng = increinincrediblecredibledible

// find the given word again
// counter 2
// mynewLongStrng = increincredibledible

// find the given word again
// counter 3
// mynewLongStrng = incredible


// find the given word again
// counter 3
// mynewLongStrng = incredible

// function wordNest(givenWord, longWords){
//     let counter = 0
//     while(givenWord !== longWords){
//         if(longWords.includes(givenWord)){
//             counter += 1
//             let startPos = longWords.indexOf(givenWord)
//             let endPos = startPos + givenWord.length
//             longWords = longWords.substring(0, startPos) +  longWords.substring(endPos, longWords.length)
//         }
//     }
//     console.log(counter);
    
// }

// wordNest("incredible", "incredible")

function wordNest(keyword,str) {
    let count = 0;
    let startingPosOfkeyword = 0
    let endPosOfkeyword = 0;
    while(keyword !== str){
        if(str.includes(keyword)){
            count += 1
            startingPosOfkeyword = str.indexOf(keyword)
            endPosOfkeyword = startingPosOfkeyword + keyword.length
    
            str = str.substring(0, startingPosOfkeyword) +  str.substring(endPosOfkeyword, str.length)
        }
    }
    return count
}

console.log(wordNest("incredible", "incredibleincreinincrincredibleediblecredibledible"));

// time = O(2N)
// space = O(1)
