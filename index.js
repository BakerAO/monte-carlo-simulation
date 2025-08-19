import Chance from "chance";

const chance = new Chance();
const numberOfGames = 1_000_000;

let correct = 0;
let incorrect = 0;

const willSwitch = 1;

for (let i = 0; i < numberOfGames; i++) {
  const car = chance.integer({ min: 1, max: 3 });
  const choice1 = 1;

  let openDoor = 2;
  if (car !== choice1 && car === 2) {
    openDoor = 3;
  }

  let choice2 = 1;
  if (willSwitch) {
    if (openDoor === 2) {
      choice2 = 3
    } else {
      choice2 = 2;
    }
  }

  if (choice2 === car) {
    correct++;
  } else {
    incorrect++;
  }
}

console.log({ correct, incorrect });
console.log(`${correct * 100 / numberOfGames}%`);
