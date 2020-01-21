/*
GAME RULES:

- The game has 2 players, playing in rounds:
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- A player looses his ENTIRE score when he rolls two 6'es in a row. After that, it's the next player's turn.
Players can set the winning score (in an input field), so that they can change the predefined score of 100.

*/
/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//Declare Variables
var scores, roundScore, activePlayer, gamePlaying;

//Initialise Variables (Array, Integer)
init();

var lastDice;

//Roll Dice button implementation
document.querySelector('.btn-roll').addEventListener('click', function(){
            //Dealing with the game's state
            if(gamePlaying){
                //Random Number generator
            var dice = Math.floor(Math.random() * 6) + 1;
            //Display the result
            var diceDom = document.querySelector('.dice');
            diceDom.style.display = 'block';
            diceDom.src = 'dice-' + dice + '.png';
            //Update the round score IF the rolled number was NOT a 1
            if(dice === 6 && lastDice === 6){
               //Player looses score
               scores[activePlayer] = 0;
               document.querySelector('#score-' + activePlayer).textContent = '0';
               nextPlayer();
               }else if(dice !== 1){
                //Player 1 (add score)
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }else{
                //Player 2 (add score)
                nextPlayer();
            }
                lastDice = dice;
       }
});

//DOM manipulation
//document.querySelector('#current-' + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;

//Hold Button implementation
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;

        //Undefined, 0, null or "" are COERCED to false
        //Anything else is COERCED to true
        var winningScore;

        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
        //Check if player wins the game
        if(scores[activePlayer] >= winningScore){
           document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
           document.querySelector('.dice').style.display = 'none';
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           gamePlaying = false;
            }else{
            //Next player
            nextPlayer();
           }
        }
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
document.querySelector('.btn-new').addEventListener('click', init);

//DRY!!!
function init(){
    //Initialise Variables (Array, Integer)
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    //Dealing with the game's state
    gamePlaying = true;

    //Initialising dice not to display on start up
    document.querySelector('.dice').style.display = 'none';

    //Handling Dice event (Event Handling)
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};

// Clicking for instructions
document.querySelector(".instructions").addEventListener("click", function(){
        document.querySelector(".modal").classList.add("show");
        document.querySelector(".close").addEventListener("click", function(){
            document.querySelector(".modal").classList.remove("show");
    });
});

