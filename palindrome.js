// palindrome(word) return true if word is palindrome otherwise return false
// palindorome is a word that could be re-written backwords or forwards and still remain the same.

// palindrome(civic) true 
// palindrome(deifi) false
// palindrome(raceceee) false
// palindrome(radar) true 
// palindrome(refer) true 
// palindrome(stats) true 
// palindrome(level) true '

// "civic"
// [c, i, v, T, c]
// leftPointer = 0
// rightPointer = arr.length -1
// arr[lefpo] == arr[RTCIceGatherer]
// lef add 1,
// rgigh - 1

// racecar

function recPal(word) {
    console.log("current word: ", word);
    

    if(word.length == 1 || word.length == 0){
        return true
    }

    if(word[0] != word[word.length -1]){
        console.log("comparing: " + word[0] + '  and ' +  word[word.length -1] );
        
        return false
    }

    return recPal(word.substring(1, word.length-1))
}

console.log(recPal("zaqxswracecarwsxqaz"))

//  function palindromes(word) {
//      let wordArr = word.split("");

//      let leftInc = 0;
//      let rightInc = wordArr.length-1;

//      while(leftInc != rightInc){
//          if(word[leftInc] != word[rightInc]){
//              return false
//          }
//          leftInc ++;
//          rightInc --;
//      }

//      return palindromes() 
//  }

//console.log(palindromes("racecar"));
 
// function palindrome(word) {
//     let newWord = [];

//     for (i=word.length-1; i>=0; i--){
//         newWord.push(word[i])
//     }
//     const newStr = newWord.join('')

//     if (word === newStr){
//         return true
//     }else{
//         return false
//     }
// }
// // time and space analysis
// // space: O(N)
// // time: O(2N) -> O(N)
// console.log(palindrome("civic"));
// console.log(palindrome("deifi"));
// console.log(palindrome("raceceee"));
// console.log(palindrome("radar"));
// console.log(palindrome("refer"));
// console.log(palindrome("stats"));
// console.log(palindrome("lesvel"));

