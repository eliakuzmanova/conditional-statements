function shopping(input) {

    let budget = Number(input[0]);
    let videoKarti = Number(input[1]);
    let procesor = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideoKarti = videoKarti * 250;
    let priceProcesor = (priceVideoKarti * 0.35) * procesor;
    let priceRam = (priceVideoKarti * 0.10) * ram;

    let totalSum = priceVideoKarti + priceProcesor + priceRam;

    if (videoKarti > procesor) {
        totalSum = totalSum * 0.85;
    }

    let deff = Math.abs(totalSum - budget);

    if (totalSum <= budget) {
        console.log(`You have ${deff.toFixed(2)} leva left!`)

    } else {
        console.log(`Not enough money! You need ${deff.toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
    "3",
    "1",
    "1"])
