import Chance from "chance";

const chance = new Chance();
const numberOfGames = 1_000_000;

let correctSwitch = 0;
let incorrectSwitch = 0;
let correctStay = 0;
let incorrectStay = 0;

for (let i = 0; i < numberOfGames; i++) {
  const car = chance.integer({ min: 1, max: 3 });
  const choice1 = 1;

  let openDoor = 2;
  if (car !== choice1 && car === 2) {
    openDoor = 3;
  }

  if (choice1 === car) {
    correctStay++;
    incorrectSwitch++;
  } else {
    correctSwitch++;
    incorrectStay++;
  }
}

console.log({ correctStay, incorrectStay });
console.log(`Stay: ${correctStay * 100 / numberOfGames}%`);
console.log({ correctSwitch, incorrectSwitch });
console.log(`Switch: ${correctSwitch * 100 / numberOfGames}%`);
