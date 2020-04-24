/*Dividing by 0 is a huge mistake and should be avoided at all costs.

Create a function that when given a math expression as a string, return True if at any point,
 the expression involves dividing by 0.

Examples
catchZeroDivision("2 / 0") ➞ true

catchZeroDivision("4 / (2 + 3 - 5)") ➞ true

catchZeroDivision("2 * 5 - 10") ➞ false
Notes
Multiplication signs will be given as an asterisk *.*/

function catchZeroDivision(str) {
    let stringArr = str.split(" ")


    if(stringArr.length > 3){
        // "4 / (2 + 3 - 5)
        let rest = str.slice(4, str.length+1)
        rest = rest.replace("(", "")
        rest = rest.replace(")", "")
        let restArr = rest.split(" ")
        console.log(restArr);

        let sum = Number(restArr[0])
        for(i=0; i<restArr.length; i++){
            if(i == 1 || (i % 2 != 0)){
            let operator = checkOperator(restArr[i])
                console.log("sum: ", sum);
                
                let number =  restArr[i+1]
                sum = calculate(sum, operator, number)
                
            }
        }
        return (sum === 0)
        
    }else{
        let lastItem = Number(stringArr[stringArr.length-1])
        let operator = stringArr[1]
        // if(checkOperator(operator) === "/" && lastItem === 0){
        //     return true
        // }else{
        //     return false
        // }

        return ((checkOperator(operator) === "/" ) && (lastItem === 0))
    }
        
}


console.log(catchZeroDivision("4 / (2 + 3 - 5)"));
// console.log(catchZeroDivision("4 / 0"));
// console.log(catchZeroDivision("4 / 4"));
// console.log(catchZeroDivision("4 + 0"));




function checkOperator(operator) {
    if(operator === "/"){
        return "/";
    }else if(operator === "*"){
        return "*";
    }else if(operator === "+"){
        return "+";
    }else if(operator === "-"){
        return "-";
    }else{
        return "undefinedOperator"
    }
}

function calculate(sum, operator, number) {
    if(operator == "+"){
                
        sum = sum + Number(number)
        console.log( " now adding: "+  number + " after op: sum is : "+ sum);

        
    }else if(operator == "-"){
        sum = sum - Number(number)
        console.log(" now subtracting: " +  number + " after op: sum is : "+ sum);

    }else if(operator == "*"){
        sum = sum * Number(number)
    }else if(operator == "/"){
        sum = sum / Number(number)
    }

    return sum;
}