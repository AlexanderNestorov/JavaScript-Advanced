function solve(array,n ) {

    let newArr = array.slice();


   let result = '';

    for (let i = 0; i < n; i++) {

        array.unshift(array.shift());
        
    }

    console.log(array.join(' '))

}
solve(['1', 
'2', 
'3', 
'4'], 
2);