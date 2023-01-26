function pipesInPool(input) {

   let poolVolume = Number(input[0]);
   let debitOne = Number(input[1]);
   let debitTwo = Number(input[2]);
   let hours = Number(input[3]);

   let firstPipe = debitOne * hours;
   let secondPipe = debitTwo * hours;
   let twoPipes = firstPipe + secondPipe;

   let procentFirstPipe = (firstPipe / twoPipes) * 100;
   let procentSecondPipe = (secondPipe / twoPipes)* 100;

   let procentOfWaterInPool = twoPipes / poolVolume * 100;
   let deff = Math.abs(twoPipes - poolVolume);

   if ( twoPipes <= poolVolume ) {
console.log(`The pool is ${procentOfWaterInPool.toFixed(2)}% full. Pipe 1: ${procentFirstPipe.toFixed(2)}%. Pipe 2: ${procentSecondPipe.toFixed(2)}%.`)

   } else {
console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${deff.toFixed(2)} liters.`)

   }


}

pipesInPool(["100",
"100",
"100",
"2.5"]);


