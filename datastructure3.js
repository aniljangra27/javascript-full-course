'use strict';
/**
 * Set and Map Data Structure
 * */
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Task1: Create an array 'events' of the different game events that happened (no dulicates)
console.log('\n---------------- Task1--------------');
const eventArrayVal = [...gameEvents.values()];
const events = [...new Set(eventArrayVal)];
console.log(events);

//Task2: After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log
console.log('\n---------------- Task2--------------');
gameEvents.delete(64);
console.log(gameEvents);

//Task3: Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log('\n---------------- Task3--------------');
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const lastGameTime = [...gameEvents.keys()].pop();
// console.log(lastGameTime);
console.log(
  `An event happened, on average, every ${
    lastGameTime / gameEvents.size
  } minutes`
);

//Task4: Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
console.log('\n---------------- Task4--------------');

for (const [key, value] of gameEvents.entries()) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
