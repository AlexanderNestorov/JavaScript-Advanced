function solve(array) {

//We begin by initializing the Object in which we will keep our results.    
    let result = {};

// We need a simple 'for' cycle to iterate through the input array.
// As said in the description, every even element will be a 'name' or key property
// and every odd element will be a value corresponding to that key.
    for (let i = 0; i < array.length; i += 2) {
       result[array[i]] = Number(array[i+1]);
    }
    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
