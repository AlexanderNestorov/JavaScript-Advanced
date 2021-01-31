function solve() {
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(strToAppend) {
        str += strToAppend;
    }

    function removeStart(n) {
        str = str.substring(n);
    }

    function removeEnd(n) {
        str = str.slice(0, -n);
    }
    function print() {
        console.log(str);
    }
}