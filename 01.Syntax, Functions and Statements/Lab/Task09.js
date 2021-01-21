function solve(params) {
    
let sum = 0;
let inverseSum = 0;
let stringSum = "";

    for (let i = 0; i < params.length; i++) {
        
        sum += params[i];
        inverseSum += 1 / params[i];
        stringSum += params[i];
        
    }
    
    console.log(sum);
    console.log(inverseSum.toFixed(4));
    console.log(stringSum);
}

const array = [1, 2, 3];
const array1 = [2, 4, 8, 16];
solve(array);
solve(array1);