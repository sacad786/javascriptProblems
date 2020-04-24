function sortContacts(arr,str) {
  if (arr === null || arr === undefined) {
    return []
  }
  // let reversed = arr.sort(compare).reverse()

  let sortedNames = arr.sort(compare);

  
 

  // if(str === "DESC"){
  //   return reversed
  // }else if(str === "ASC"){
    return sortedNames
  // }
}

console.log(sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC"));

// console.log(sortContacts([], "DESC"));

function compare(a, b) {

  let splitA = a.split(" ") //  ["John, "Locke"]
  let splitB = b.split(" ") //  "[Thomas, Aquinas"]

  let lastoOfA = splitA[splitA.length -1] //  splitA[1] //  "Locke"
  let lastoOfB = splitB[splitB.length -1] // Aquinas
  
  if(lastoOfA < lastoOfB){
    return -1
  }
  if (lastoOfA > lastoOfB) {
    return 1
  }
  
  return 0;
}



