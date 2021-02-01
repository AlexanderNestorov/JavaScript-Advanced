function solve(array,arg) {
    const map = {
        'asc': (a,b) => a - b,
        'desc': (a,b) => b - a
    };

    return array.sort(map[arg]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))