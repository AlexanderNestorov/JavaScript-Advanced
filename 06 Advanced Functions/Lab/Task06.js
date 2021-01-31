function solution(input) {
// it is said in the description that we need to use Closure
// and we do not need to return the object,just print the results of the `print()` function
    let object = {
        // we initialize an empty collection to keep the strings

        list: [],
        // then we add the needed commands 

        // keep in mind that we have to use `this.`
        add(string) {
            this.list.push(string);
        },
        remove(string) {
            // in the description it is said that we need to remove every occurrence of the given string
            // and thats why whe use a `for` loop
            for (let el of this.list) {

            
            var index = this.list.indexOf(string);
            if (index !== -1) {
                this.list.splice(index, 1);
            }
        }
        },
        print() {
            console.log(this.list.join(','));
        }
    };

    // finally we just read the input 
    for (let str of input) {
        tokens = str.split(' ');

        // couple of `if` checks to be sure that the correct commands are called
        if (tokens[0] === 'add') {
            object.add(tokens[1]);
        } else if (tokens[0] === 'remove') {
            object.remove(tokens[1]);
        } else if (tokens[0] === 'print') {
            object.print();
        }
    }
}


solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);