function timePlusFifthteenMinutes(input) {

    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);

    let totalTime = firstTime * 60 + secondTime + 15;
    let hours = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;

    if (hours === 24) {
        hours = 0
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`)
    }

}

timePlusFifthteenMinutes(["12", "49"]);