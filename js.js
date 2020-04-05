let hour = 1260

// hour between 0000 - 1159   = 'good morning'
// hour between 1200 - 1759   = 'good afternoon'
// hour between 1800 - 2359   = 'good evening'
// hour less than 0 or greater than 2359 = 'wrong time please choose between 0000 and 2359'
let number = hour + ""

const singleDigit =Number(number[2]) 

if (singleDigit >= 6){
    console.log("invalid time")
}else if (hour >= 0000 && hour <= 1159){
    console.log("good morning") 
}else if (hour >= 1200 && hour <= 1759){
    console.log('good afternoon') 
}else if (hour >= 1800 && hour <= 2359){
    console.log('good evening') 
}else if (hour >= 2359 || hour <= 0){
    console.log('wrong time please choose between 0000 and 2359')
}else{
    console.log("unhandle condition")
}
