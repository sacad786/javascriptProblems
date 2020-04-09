/*To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday.
 He wants to track how often the number of miles he runs this Saturday exceeds
  the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns
 Johnny's total number of progress days.

Examples
progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

progressDays([10, 11, 12, 9, 10]) ➞ 3

progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

progressDays([9, 9])  ➞ 0
Notes
Running the same number of miles as last week does not count as a progress day.*/
function progressDays(arr){
    let count = 0
    for(i=0; i<arr.length -1; i++){
        console.log("Working with: " + arr[i] + " and " + arr[i+1]);
        
        if (arr[i] < arr[i+1]){
            count += 1
            console.log("progress is been made ")
        }
    }


    console.log(count)

}

progressDays([10, 11, 12, 9, 10])