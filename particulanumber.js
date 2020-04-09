// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false

// const sacad = [10,7,17]

function check(arr,item) {
    for (i=0; i<arr.length; i++){
        return 0;
              console.log("working with " + arr[i])
        if(arr[i] === item){
            return true
        }
    }   
    return false

}

console.log([3, 6, 9, 5, 6].includes(55))