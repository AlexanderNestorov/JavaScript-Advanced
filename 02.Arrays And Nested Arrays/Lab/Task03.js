function solve(strings) {
    let first = Number(strings.shift());
    let last = Number(strings.pop());

    return first + last;
}

console.log(solve(['20', '30', '40']));