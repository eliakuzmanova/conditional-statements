function godzillaVsKong(input){

    let budget = Number(input[0]);
    let statisti = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let dekor = budget * 0.1;
    

if ( statisti > 150 ) {
clothesPrice = clothesPrice * 0.90;
}
let totalSum = clothesPrice * statisti + dekor;
let deff = Math.abs(totalSum - budget);

if ( totalSum <= budget ) {
console.log("Action!");
console.log(`Wingard starts filming with ${deff.toFixed(2)} leva left.`)

} else {
console.log("Not enough money!");
console.log(`Wingard needs ${deff.toFixed(2)} leva more.`)
}

}
godzillaVsKong(["9587.88",
"222",
"55.68"])



//•	Декорът за филма е на стойност 10% от бюджета. 
//•	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
