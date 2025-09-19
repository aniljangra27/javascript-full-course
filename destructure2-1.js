'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task1: Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
console.log('---------- Task-1 ----------------');
const gameScoreCard = game.scored;
for (const [i, j] of gameScoreCard.entries()) {
  console.log(`Goal ${i + 1}: ${j}`);
}

//Task2: Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
console.log('---------- Task-2 ----------------');
const oddValues = Object.values(game.odds);
let avg = 0;
for (const val of oddValues) {
  avg += val;
}
// console.log(avg);
console.log(avg / oddValues.length);

/*
Task3: Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw").
*/
console.log('---------- Task-3 ----------------');
for (const [key, value] of Object.entries(game.odds)) {
  // console.log(key, value);
  const tempStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${tempStr} : ${value}`);
}
