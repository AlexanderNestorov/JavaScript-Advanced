function solve(stepsCount,stepLength,speed) {
    let speedInSeconds = speed / 3.6;
    let distanceInMeters = stepsCount * stepLength;

    let breakInSeconds = Math.floor(distanceInMeters / 500) * 60;

    let time = (distanceInMeters / speedInSeconds) + breakInSeconds
    let timeInSeconds = Math.ceil(time % 60);
    let timeInMinutes = Math.floor(time / 60);
    let timeInHours = Math.floor(timeInMinutes / 60);

    
    
    console.log(`${timeInHours < 10 ? 0 : ""}${timeInHours}:${timeInMinutes < 10 ? 0 : ""}${timeInMinutes}:${timeInSeconds < 10 ? 0 : ""}${timeInSeconds}`);
}

solve(2564, 0.70, 5.5);