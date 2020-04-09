// Create a function that returns the total number of parameters passed in.

// Examples
// numberArgs("a", "b", "c") ➞ 3

// numberArgs(10, 20, 30, 40, 50) ➞ 5

// numberArgs(x, y) ➞ 2

// numberArgs() ➞ 0
// Notes
// How can you express the input parameter so it takes a variable number of arguments?



function sumParam(p1, p2, p3) {
    let sum = 0;
    for(i=0; i<arguments.length; i++){
        sum += arguments[i] 
    }
     console.log(sum)
 }
 
 sumParam(1,2,5)
