/* given numbers from 1 to 100
print "fizz" if the number is divisible by 3
or
print "buzz" if the number is divisbile by 5
or
print "fizzBuzz" if the number is divisible by either 3 or 5
otherwise print the number

lets do for 1 to 15
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzBuzz */

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0){
        return "fizzBuzz"
    }
    else if (num % 3 === 0){
        return "fizz"
    }else if(num % 5 === 0){
        return "buzz"
    }else {
        return num
    } 
}

for(i =1; i <= 100; i++){
    console.log(fizzBuzz(i));

}


