function find(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let current = matrix[i][j];
            let next = matrix[i][j+ 1];

            if(i !== matrix.length - 1) {
                let neighbour = matrix[i + 1][j];
                if(current === neighbour) {
                    count++;
                }
            }

            if(current === next) {
                count++;
            }
            
        }
        
    }
     return count;
}

console.log(find([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));

console.log(find([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));