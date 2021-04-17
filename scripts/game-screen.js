import Game from './game.js';


class GameScreen {

    constructor(game, onNewGameClick, onGameOver) {
        this.game = game;
        document.body.style.background = "#ffbea7";
        this.gameScreen = document.querySelector('#game-screen');
        this.gameScreen.style.display = "block";
        this.onGameOver = onGameOver;
        this.newGameButton = document.querySelector("#newgame");
        this.newGameButton.addEventListener('click', this.handleReset);


        this.rock = document.querySelector('#rock');
        this.paper = document.querySelector('#paper');
        this.scissors = document.querySelector('#scissors');

        this.rock.addEventListener('click', this.onPlayerChoice);
        this.paper.addEventListener('click', this.onPlayerChoice);
        this.scissors.addEventListener('click', this.onPlayerChoice);

    }

    handleGameOver = () => {

        setTimeout(() => {
            this.onGameOver(this.game);


        }, 2000);

    }

    handleReset = () => {
        this.resetGame(this.game);
    }

    stop() {
        this.gameScreen.style.display = "none";
        this.rock.removeEventListener('click', this.onPlayerChoice);
        this.paper.removeEventListener('click', this.onPlayerChoice);
        this.scissors.removeEventListener('click', this.onPlayerChoice);
        this.newGameButton.removeEventListener('click', this.handleReset);

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
            gameResult.textContent = `IT'S OVER, YOU ${this.game.scoreLogger(endGameChecker)}`;
            this.handleGameOver();
        }

    }

    onPlayerChoice = (e) => {
        const selection = e.currentTarget.id;
        const CPUSelection = this.game.computerSelection();
        let result = this.game.round(selection, CPUSelection);
        const endGameChecker = this.game.updateScore(result);
        this.renderSelections(selection, CPUSelection, endGameChecker);
        this.render(result, selection, CPUSelection, endGameChecker);
    }

    renderSelections(selection, CPUSelection, endGameChecker) {
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

        this.rock.disabled = true;
        this.paper.disabled = true;
        this.scissors.disabled = true;



        setTimeout(() => {
            imgPlayerSelection.style.display = 'none';
            imgPCSelection.style.display = 'none';

            if (endGameChecker == 'not finished') {
                this.rock.disabled = false;
                this.paper.disabled = false;
                this.scissors.disabled = false;
            }


        }, 1500);
    }

    resetGame(game) {
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


}






export default GameScreen;