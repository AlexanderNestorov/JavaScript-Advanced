function solve(array) {

    return array.sort((a,b) => {
        if(a.length === b.length) {
            return a.localeCompare(b);
        }

        return a.length - b.length;
    }).join("\n");
}

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
))