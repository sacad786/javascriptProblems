// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false

// const sacad = [10,7,17]

function check(arr,index) {
    if(arr[0] === index){
        return true
    }
    return false
}

console.log(check([5, 5, 5, 6], 5))