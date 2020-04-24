/*Create a function that returns the majority vote in an array.
 A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

Examples
majorityVote(["A", "A", "B"]) ➞ "A"
sfksdf = {
  "A": 4,
  "B": 1,
  "C": 1,
}

return key with the maximum values

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null
Notes
The frequency of the majority element must be strictly greater than 1/2.
If there is no majority element, return null.
If the array is empty, return null.*/

function majorityVote(arr) {
  
// var ar =["A", "B", "B", "A", "C", "C"];
let newObj = {}
// console.log("object: ", newObj);


for(i = 0; i < arr.length; i++){
  // console.log("current working with item: ", arr[i]) ;

  if(arr[i] in newObj){
    // console.log("Found " + arr[i] + " in the object, so incrementing 1" );
    newObj[arr[i]] += 1    
  }else{
    // console.log("did not Found " + arr[i] + " in the object, so creating it and initializing it with 1" );
    newObj[arr[i]] = 1    
  }
  // console.log("object: ", newObj);

  // console.log("");
// console.log("");
// console.log("");

}
  console.log("object: ", newObj);
  // newObj["K"] = 90

let found2GreatestNum = false
let bigNum1 = 0
let bigNum2 = 0
let bigNum1Val = "";
let bigNum2Val = "";
  
  Object.keys(newObj).forEach(function(key) {
    if(newObj[key] > bigNum1 && newObj[key] > bigNum2 ){
      bigNum1 = newObj[key]
      bigNum1Val = key
      found2GreatestNum = false
    }else if((newObj[key] == bigNum1)){
      bigNum2 = newObj[key]
      bigNum2Val = key

      found2GreatestNum = true;
    }

    //console.log(key, newObj[key]);
  
  });

if(!found2GreatestNum){
  return bigNum1Val
}else{
  return null 
}
let arsr = Object.values(newObj);
let min = Math.min(...arr);
let max = Math.max(...arr);
}
console.log(majorityVote(["A", "A", "A", "B", "C", "C", "C", "C", "A"]));


// console.log( `Min value: ${min}, max value: ${max}` );

// console.log("final object: ", newObj);

  // loop throught the iems in list
  //  grap item, 
  // if that item is in the object
  //    increment its value by 1
  // otherwise create the iem in the object and initilize with 1

