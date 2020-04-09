// Create a function that takes an array with numbers
//  and return an array with the elements multiplied by two.

// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]



function getMultipliedArr(arr){

for (i=0;i<arr.length;i++){
 const multiplied = arr[i] * 2
 arr[i] = multiplied
}
console.log(arr)

}

getMultipliedArr([1, 2, 3])

// go through the arra
// acces the item in hte index /loop
// mulitply that item byy 2, and save it in tempVar
// save that temppVar in  the array at the same index






