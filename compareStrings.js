// Create a function that takes two strings as arguments
//  and return either true or false depending on
//   whether the total number of characters in the first string 
//   is equal to the total number of characters in the second string.

// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false

function comp(str1,str2){
  if(str1.length === str2.length){
    return true
  }
  return false
}

console.log(comp("s","ss"))
