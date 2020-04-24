// 0, 1, 2, 3,  4, 5, 6, 7,  8, 9
// 0, 1, 1,  2, 3, 5, 8, 13, 21, 34
// fnd the nth fibnaci number

function fibonacci(n) {
    if(n == 0){
        return 0
    }
    if (n == 2 || n == 1) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}
// console.log(fibonacci(0));
// console.log(fibonacci(10));




//                      fib 5
//              fib4                        fib3
//      fib3           fib2           fib2        fib1
// fib2    fib 1   fib1 fib 0       1,  0   

// function fib(n){
//     let aa = [0, 1]
//     let first = 0
//     let last = 1    
//     for(i =0 ; i < n-1; i+=2){
//         console.log(aa);
        
//         first = aa[0] + aa[1]
//         last = first + aa[1]
//         aa = [first, last]
//     }
//     console.log(aa);


//     console.log(aa[1]);
// }

function fibb(n) {
    let lastFib = [0,1]
    let counter = 3
    
    while(counter <= n){
        nextFib = lastFib[0] + lastFib[1]
        lastFib[0] = lastFib[1]
        lastFib[1] = nextFib

        counter ++
    }

    return lastFib[0] + lastFib[1]
}


console.log(fibb(7))
