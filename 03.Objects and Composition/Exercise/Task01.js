function solve(array) {

//We begin by initializing the Object in which we will keep our results.    
    let result = {};

// We need a simple 'for' cycle to iterate through the input array.
// As said in the description, every even element will be a 'name' or key property
// and every odd element will be a value corresponding to that key.
// We iterate over 2 elements to easily get an even-odd combination. 
    for (let i = 0; i < array.length; i += 2) {
        // We make a property in 'result' which is an even element to hold the odd
        // element next to it.So the key in 'result' corresponding to the element's name
        // will hold its value which is the element's calorie number.
       result[array[i]] = Number(array[i+1]);
    }
 // finally we just log the object
    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
