/*Create a function that performs an even-odd transform to an array,
 n times. Each even-odd transformation:

Adds two (+2) to each odd integer.
Subtracts two (-2) to each even integer.
Examples
evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]*/
// b o d m a s
function evenOddTransform(arr,num) {
    
    for(i=0; i<arr.length; i++){
        
        if(arr[i] % 2 === 0){
            arr[i] = (arr[i]) - 2 * num
        }else if(arr[i] % 2 !== 0){
            arr[i] = (arr[i]) + 2 * num
        }
    }
    return arr 
}

console.log(evenOddTransform([0, 0, 0], 10));
console.log(evenOddTransform([3, 4, 9], 3));
console.log(evenOddTransform([1, 2, 3], 1));

