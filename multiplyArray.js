// Create a function that takes an array with numbers
//  and return an array with the elements multiplied by two.

// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

// function getMultipliedArr(arr){
//   for (i=0;i<arr.length;i++){
//      const elementMultiplied = arr[i]*2
//      arr[i] = elementMultiplied
//   }
//   return arr
// }

// console.log(getMultipliedArr([1,86,-5]))


// // function getMultipliedArr(arr){
//   for (i=0;i<arr.length;i++){
//     const multiplied = arr[i] * 2
//     arr[i] = multiplied
//   }
//   return arr
// // }

// go through the array 
// get each item 
// multiply by 2 
// save that item to the array in the same position
function getMultipliedArr(){
  const saccad = [1,2,3,4,5]
  return saccad[]*2
}

console.log(getMultipliedArr())
