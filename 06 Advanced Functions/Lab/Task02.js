function solution(a) {
    let number = a;
    return function (b) {
        
        return number + b;
    };
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));