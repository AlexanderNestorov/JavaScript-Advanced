function solve(array) {
    array.sort((a,b) => a-b);
    const middle = Math.floor(array.length / 2);
    const result = array.slice(middle);

    return result;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));