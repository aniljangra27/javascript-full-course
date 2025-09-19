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

//task1: Create one player array for each team (variables 'players1' and'players2')

const [player1, player2] = game.players;
console.log(player1, player2);
console.log('--------------------------');
//Task2: The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
console.log('--------------------------');
//Task3: Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
console.log('--------------------------');

//Task4: During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const addtionalPlyer = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...player1, ...addtionalPlyer];
console.log(players1Final);
console.log('--------------------------');

//Task5: Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const [team_1, draw_1, team_2] = [
  game.odds.team1,
  game.odds.x,
  game.odds.team2,
];
console.log(team_1, draw_1, team_2);
//another way
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
console.log('--------------------------');

/*Task6: Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
*/
const printGoals = (...player) => {
  console.log(`${player.length} run scored`);
};
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals('Lewandowski', 'Gnarby');
printGoals(...game.scored);
console.log('--------------------------');

/*
Task7: The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
*/
// use logical operator here
team1 < team2 && console.log('Team-1 win');
team1 > team2 && console.log('Team-2 wing');
console.log('--------------------------');

// for  of loop
console.log('-------for of loop-------');
for (const player of game.scored) {
  console.log(player);
}

console.log('--------------------------');
// for of loop with entries
console.log('-------for of loop with entries-------');
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

console.log('--------------------------');
