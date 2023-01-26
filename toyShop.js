function toyShop(input){

    let price = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let pricePuzzles = puzzels * 2.60;
    let priceDolls = dolls * 3;
    let priceBears = bears * 4.10;
    let priceMinions = minions * 8.20;
    let priceTrucks = trucks * 2;

    let totalPrice = pricePuzzles + priceDolls + priceBears + priceMinions + priceTrucks;
    let toys = puzzels + dolls + bears + minions + trucks;
    
    if (toys >= 50) {
    totalPrice = totalPrice * 0.75;
    }

    totalPrice = totalPrice * 0.90;

    let finalSum = Math.abs(totalPrice - price);

    if (totalPrice >= price) {
console.log(`Yes! ${finalSum.toFixed(2)} lv left.`)

    } else {
console.log(`Not enough money! ${finalSum.toFixed(2)} lv needed.`)

    }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])



//Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.

