/*Valid Name
For this exercise, keep in mind the following definitions:

A term is either an initials or word.
initials = 1 character
words = 2+ characters (no dots allowed)
A valid name is a name written in one of the following ways:

H. Wells
H. G. Wells
Herbert G. Wells
Herbert George Wells
The following names are invalid:

Herbert or Wells (single names not allowed)
H Wells or H. G Wells (initials must end with dot)
h. Wells or H. wells or h. g. Wells (incorrect capitalization)
H. George Wells (middle name expanded, while first still left as initial)
H. G. W. (last name is not a word)
Herb. G. Wells (dot only allowed after initial, not word)
Rules
Both initials and words must be capitalized.
Initials must end with a dot.
A name must be either 2 or 3 terms long.
If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
The last name must be a word (not an initial).
Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.

Examples
validName("H. Wells") ➞ true 

validName("H. G. Wells") ➞ true 

validName("Herbert G. Wells") ➞ true 

validName("Herbert") ➞ false
// Must be 2 or 3 words 

validName("h. Wells") ➞ false
// Incorrect capitalization 

validName("H Wells") ➞ false
// Missing dot after initial 

validName("H. George Wells") ➞ false
// Cannot have: initial first name + word middle name

validName("H. George W.") ➞ false
// Last name cannot be initial 

validName("Herb. George Wells") ➞ false
// Words cannot end with a dot (only initials can) 
Notes
A term is either an initial or word.
Initials and words are disjoint sets. */

function validName(str) {
    let a =  str.split(" ")
    // return a[1]
  
    if (a.length === 1) {
      return false
    }
  
    if (a.length <=2) {
      if (a[0] === a[0].toUpperCase() && a[0].includes(".") && a[0].length <=2
         && a[a.length -1].length > 2 && !(a[a.length -1].includes("."))) {
       return true
     }
     return false
    }else if (a.length > 2) {
      if (a[0][0] === a[0][0].toUpperCase() && !(a[0].includes(".")) && a[0].length > 1
        && a[a.length -1].length > 2 && !(a[a.length -1].includes("."))){
        return true
      }else{
        if (a[0] === a[0].toUpperCase() && a[0].includes(".") && a[0].length <=2 &&
          a[1].length <=2 && a[1].includes(".")){
            return true
          }
          return false
      }
    }
  
  }
  console.log(validName("H. Wells"))
  console.log(validName("H. G. Wells")) 
  console.log(validName("Herbert G. Wells"))
  console.log(validName("Herbert")) 
  console.log(validName("h. Wells")) 
  console.log(validName("H Wells"))
  console.log(validName("H. George Wells"))
  console.log(validName("H. George W.")) 
  console.log(validName("Herb. George Wells"))