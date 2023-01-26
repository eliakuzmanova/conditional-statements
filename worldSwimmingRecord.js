function worldSwimmingRecord(input){

  let recordInSeconds = Number(input[0]);
  let disanceInMeters = Number(input[1]);
  let secondsForOneMeter = Number(input[2]);


 let seconds = disanceInMeters * secondsForOneMeter;
 let zabavqne = Math.floor(disanceInMeters / 15) * 12.5;

 let allTime = seconds + zabavqne;
 let deff = Math.abs(allTime - recordInSeconds);

if (allTime < recordInSeconds) {
console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`)

} else {
console.log(`No, he failed! He was ${deff.toFixed(2)} seconds slower.`)

}

}

worldSwimmingRecord(["10464",
"1500",
"20"])



