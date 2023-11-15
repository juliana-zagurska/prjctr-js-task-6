'use sctrict';
// Task 1 : find sum of all elements 
function sumThemAll (...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sumThemAll(1,5,3,10));

// Task 2 : The task of using closure
function multiply(a) {
    return function(b) {
        return a * b;
    };
}
const result = multiply(3)(4);
console.log(result); 

// Task 3 : sort movies array  

