// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

// function reverse(arr){
//     for (i=0;i<arr.length;i++){
//         const reversed Arr arr.shift()
//         arr[i]= reversed
//     }
//     return arr
// }

// console.log(reverse([1, 2, 3, 4]))


// let arrs =  [1,2,3,4,5] 

// for (i=0;i<1;i++){
// const popped = arrs.splice(0,1)[0]
// // const addedToTheFront = arrs.push(popped)

// }
// console.log([1,2,3].reverse)
// arrs.reverse();

let arr = [1,2,3,4,5]
let newArr = []
for(i=arr.length -1; i>=0; i--){
    console.log( newArr.push(arr[i]))
}

console.log(newArr)

// function reverse(arr) {
//     for (i=arr.length-1; i>=0; i--){
//         let newArr = []
//         // const poped = arr.splice()
//         console.log(newArr.push(arr[i]))
//     }
    
// }

// reverse([9, 9, 2, 3, 4])

