function solve(arr) {
    let min = 0;
    
    let result = arr.reduce((acc, element) => {
        if (element >= min) {
            acc.push(element);
            min = element;
        }

        return acc;
    }, []);

    return result;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));