
const georgem = { name: "GM", instrument: "mixing board", ranking:5, recordCount: 0 }
const john = { name: "JL", instrument: "rhythm guitar", ranking:1, recordCount: 20 }
const ringo = { name: "RS", instrument: "drums", ranking:2, recordCount: 12 }
const paul = { name: "PM", instrument: "bass", ranking:3, recordCount: 14 }
const george = { name: "GH", instrument: "lead guitar", ranking:4, recordCount: 15 }

const beatles = [paul, john, ringo, george];
beatles.push(georgem);
console.table(beatles);

const theremovedbeatle = beatles.pop();
console.table(beatles);
console.log(theremovedbeatle.name, " is not a real beatle");


console.log("there are now", beatles.unshift(theremovedbeatle), " beatles");
console.table(beatles);


const theremovedbeatle2 = beatles.shift();
console.log(theremovedbeatle2.name, " is absolutely not a real beatle");
console.table(beatles);


beatles.splice(2,0,theremovedbeatle);
console.table(beatles);


// loop
for (let i = 0; i < beatles.length; i++) {
  const thisBeatle = beatles[i];
  console.log(`${thisBeatle.name} plays the ${thisBeatle.instrument}`);
}


const beatlesLoopingFunction = (theBeatle, beatlePosition, allTheBeatles) => {
  console.log(`${theBeatle.name} at position ${beatlePosition+1} of ${allTheBeatles.length} plays the ${theBeatle.instrument}`)
}

beatles.forEach(beatlesLoopingFunction);


const beatlesSortFunction = (b1, b2) => {

  const b1Rank = b1.ranking;
  const b2Rank = b2.ranking;

  console.log("comparing ", b1Rank, " with ", b2Rank);

  if (b1Rank > b2Rank) {
    return 1;
  } else if (b1Rank < b2Rank) {
    return -1;
  } else {
    return 0;
  }
}

beatles.sort(beatlesSortFunction);
console.table(beatles);



// const beatlesFilterFunction = (beatle, index, allBeatles) => beatle.instrument !== "mixing board";
// const beatlesFilterFunction = (beatle) => beatle.instrument !== "mixing board";

// function beatlesFilterFunction (beatle) {
//   return beatle.instrument !== "mixing board";
// }

const beatlesFilterFunction = function (beatle) {
  return beatle.instrument !== "mixing board";
}


const filteredBeatles = beatles.filter(beatlesFilterFunction);
console.log('here are the filtered beatles');
console.table(filteredBeatles);


const soloRecordsReducerFunction = (previousSum, currentBeatle) => previousSum + currentBeatle.recordCount;
const totalNumberOfSoloRecords = beatles.reduce(soloRecordsReducerFunction, 0);
console.log(`the beatles released a total of ${totalNumberOfSoloRecords} solo records`);


const guitarPlayers = beatles.filter(beatle => beatle.instrument.indexOf('guitar') != -1);
const gpsac = guitarPlayers.reduce(soloRecordsReducerFunction, 0);
console.log(`the guitarists released a total of ${gpsac} solo records`);


// console.log(`the guitarists released a total of ${beatles.filter(beatle => beatle.instrument.indexOf('guitar') != -1).reduce((previousSum, currentBeatle) => previousSum + currentBeatle.recordCount, 0)} solo records`)

