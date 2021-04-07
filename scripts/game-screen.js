import Game from './game.js';


class GameScreen {

    constructor(game, onNewGameClick, onGameOver) {
        this.game = game;
        this.gameScreen = document.querySelector('#game-screen');
        this.gameScreen.style.display = "block";
        this.onGameOver = onGameOver;
        this.button = document.querySelector("#exit");
        this.button.onclick = this.onGameOver;
    }



    stop() {
        this.gameScreen.style.display = "none";
        renderSelections
    }

    render(result, playerSelection, computerSelection, endGameChecker) {
        const consoleLogger = document.querySelector('#console-logger');
        const gameResult = document.querySelector('#game-result');
        let textResult = '';
        const userScore = document.querySelector('#user-score');
        const cpuScore = document.querySelector('#cpu-score');

        userScore.textContent = `${this.game.userScore}`;
        cpuScore.textContent = `${this.game.cpuScore}`;

        if (result == 'win') {
            textResult = ", so you win this round!";
        } else if (result == 'lose') {
            textResult = ", so you lose this round!";
        } else {
            textResult = ", so it's a draw! Choice again!";
        }

        consoleLogger.textContent = `You chose ${playerSelection} and CPU's choice is ${computerSelection}${textResult}`;

        if (endGameChecker == 'win' || endGameChecker == 'lose') {
            gameResult.textContent = `It's over! You ${endGameChecker}!`;
        }

    }

}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.onclick = onPlayerChoice;
paper.onclick = onPlayerChoice;
scissors.onclick = onPlayerChoice;

let game = new Game();
let screen = new GameScreen(game);

function onPlayerChoice(e) {
    const selection = e.currentTarget.id;
    const CPUSelection = game.computerSelection();
    let result = game.round(selection, CPUSelection);
    const endGameChecker = game.updateScore(result);
    renderSelections(selection, CPUSelection, endGameChecker);
    screen.render(result, selection, CPUSelection, endGameChecker);
    console.log(game.scoreLogger(endGameChecker));
}



function renderSelections(selection, CPUSelection, endGameChecker) {

    const playerSelection = document.querySelector('#player-selection');
    const PCSelection = document.querySelector('#cpu-selection');

    const imgPlayerSelection = document.createElement('img');
    const imgPCSelection = document.createElement('img');
    imgPlayerSelection.classList.add('selection');
    imgPCSelection.classList.add('selection');

    playerSelection.appendChild(imgPlayerSelection);
    PCSelection.appendChild(imgPCSelection);


    imgPlayerSelection.src = `images/${selection}.png`;
    imgPCSelection.src = `images/${CPUSelection}.png`;

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;


    setTimeout(function () {
        imgPlayerSelection.style.display = 'none';
        imgPCSelection.style.display = 'none';

        if (endGameChecker == 'not finished') {
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
        }


    }, 2500);
}


function resetGame() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    const userScore = document.querySelector('#user-score');
    const cpuScore = document.querySelector('#cpu-score');
    const consoleLogger = document.querySelector('#console-logger');
    const gameResult = document.querySelector('#game-result');
    userScore.textContent = '0';
    cpuScore.textContent = '0';
    game.cpuScore = 0;
    game.userScore = 0;
    consoleLogger.textContent = "Let's start the game, you will play a best of 5, click on your weapon!";
    gameResult.textContent = "";
}


const newGame = document.querySelector('#newgame');
newGame.onclick = resetGame;


export default GameScreen;