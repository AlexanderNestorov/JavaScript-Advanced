function solve(array) {

    let result = '';
    
    array.sort((a,b) => a - b);

    arrayResult = array.slice(0,2);

    for(let num of arrayResult) {
        result += num + ' '
    }

    console.log(result);

}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);