function solve(input) {
    if(input.dizziness) {
        input.levelOfHydrated += input.weight * 0.1 * input.experience;
        input.dizziness = false;
    }
    

    return input;
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}))