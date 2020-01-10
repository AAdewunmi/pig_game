/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//Declare Variables
var scores, roundScore, activePlayer, dice;

//Initialise Variables (Array, Integer)
scores = [0,0];
roundScore = 0;
activePlayer = 1;

//Random Number generator
dice = Math.floor(Math.random() * 6) + 1;


//DOM manipulation
document.querySelector('#current-' + activePlayer).textContent = dice;
var x = document.querySelector('#score-0').textContent;

//Initialising dice not to display on start up
document.querySelector('.dice').style.display = 'none';
