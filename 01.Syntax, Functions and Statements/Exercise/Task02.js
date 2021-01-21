// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }

//Alternate and better solution
function gcd_two_numbers(x, y) {
    let hcf;
    // take input
    const number1 = x;
    const number2 = y;

    // looping from 1 to number1 and number2
    for (let i = 1; i <= number1 && i <= number2; i++) {

        // check if is factor of both integers
        if (number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }
    console.log(hcf);
}

gcd_two_numbers(15, 5);
// console.log(gcd_two_numbers(2154, 458));