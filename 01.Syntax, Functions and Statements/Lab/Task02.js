function find(arg1,arg2,arg3) {
    let lengthSum;
    let averageLength;

    let argumentLength1 = arg1.length;
    let argumentLength2 = arg2.length;
    let argumentLength3 = arg3.length;

    lengthSum = argumentLength1 + argumentLength2 + argumentLength3;

    averageLength = Math.round(lengthSum / 3);

    console.log(lengthSum);
    console.log(averageLength);

}

find('pasta','5','22.3');

