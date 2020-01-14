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
var scores, roundScore, activePlayer;

//Initialise Variables (Array, Integer)
scores = [0,0];
roundScore = 0;
activePlayer = 0;

//Initialising dice not to display on start up
document.querySelector('.dice').style.display = 'none';

//Handling Dice event (Event Handling)
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Roll Dice button implementation
document.querySelector('.btn-roll').addEventListener('click', function(){
    //Random Number generator
    var dice = Math.floor(Math.random() * 6) + 1;
    //Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    //Update the round score IF the rolled number was NOT a 1
    if(dice > 1){
        //Player 1 (add score)
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //Player 2 (add score)
        nextPlayer();
    }
});

//DOM manipulation
//document.querySelector('#current-' + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;

//Hold Button implementation
document.querySelector('.btn-hold').addEventListener('click', function(){
    //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if player won the game
    nextPlayer();
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //Set active: Player 1 or 2
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

//New Game
document.querySelector('.btn-new').addEventListener('click', function(){});


