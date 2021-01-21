function solve(array) {

    let result = [];
    let number = 1;


    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            result.push(number);
        } else {
            result.pop();

        }
        number++;

    }

    return result.length != 0  ? result.join("\n") : 'Empty';
}

console.log(solve(['add', 
'add', 
'add', 
'add']));

console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']));