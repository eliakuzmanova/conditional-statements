function lunchBreak(input){

    let name = input[0];
    let episode = Number(input[1]);
    let pause = Number(input[2]);

    let lunch = pause / 8;
    let otdih = pause / 4;

    let leftTime = pause - lunch - otdih;

    let deff = Math.abs(leftTime - episode);

    if ( leftTime >= episode ) {
    console.log(`You have enough time to watch ${name} and left with ${Math.ceil(deff)} minutes free time.`)

    } else {
console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(deff)} more minutes.`)

    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])

