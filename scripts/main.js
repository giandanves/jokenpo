const options = ['rock', 'paper', 'scissors'];
let counterUserScore = 0;
let counterCPUScore = 0;
let result = '';


function gameScreenFadeOut() {
    const gameScreen = document.querySelector('#game-screen');
    const gameHeader = document.querySelector('#game-header');
    gameScreen.style.display = "none";
    gameHeader.style.display = "none";

}

function Round(playerSelection, computerSelection) {
    let resultRound = '';
    if (playerSelection == computerSelection) {
        resultRound = "draw";
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            resultRound = "win";
        } else {
            resultRound = "lose";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            resultRound = "win";
        } else {
            resultRound = "lose";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            resultRound = "win";
        } else {
            resultRound = "lose";
        }
    }


    return resultRound;
}

function computerSelection() {
    let random = Math.floor(Math.random() * options.length);
    let CPUSelection = options[random];
    return CPUSelection;
}

function updateScore(result) {

    const userScore = document.querySelector('#user-score');
    const cpuScore = document.querySelector('#cpu-score');

    if (result == 'win') {
        counterUserScore++;

    } else if (result == 'lose') {
        counterCPUScore++;

    }

    if (counterCPUScore == 3) {
        return 'lose';
    } else if (counterUserScore == 3) {
        return 'win';
    }

    else {
        return 'not finished';
    }
}

function render(result, playerSelection, computerSelection, endGameChecker) {
    const consoleLogger = document.querySelector('#console-logger');
    const gameResult = document.querySelector('#game-result');
    let textResult = '';
    const userScore = document.querySelector('#user-score');
    const cpuScore = document.querySelector('#cpu-score');

    userScore.textContent = `${counterUserScore}`;
    cpuScore.textContent = `${counterCPUScore}`;

    if (result == 'win') {
        textResult = ", so you win this round!";
    } else if (result == 'lose') {
        textResult = ", so you lose this round!";
    } else {
        textResult = ", so it's a draw! Choice again!";
    }

    consoleLogger.textContent = `You chose ${playerSelection} and CPU's choice is ${computerSelection}${textResult}`;

    if (endGameChecker == 'win' || endGameChecker == 'lose') {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        gameResult.textContent = `It's over! You ${endGameChecker}!`;
    }

}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.onclick = onPlayerChoice;
paper.onclick = onPlayerChoice;
scissors.onclick = onPlayerChoice;



function onPlayerChoice(e) {
    const selection = e.currentTarget.id;
    const CPUSelection = computerSelection();
    result = Round(selection, CPUSelection);
    renderCPUSelection(CPUSelection);
    const endGameChecker = updateScore(result);
    render(result, selection, CPUSelection, endGameChecker);
}

function renderCPUSelection(CPUSelection) {

    setTimeout(function () {
        const pcRock = document.querySelector('#pc-rock');
        const pcPaper = document.querySelector('#pc-paper');
        const pcScissors = document.querySelector('#pc-scissors');

        pcRock.style.borderColor = 'transparent';
        pcPaper.style.borderColor = 'transparent';
        pcScissors.style.borderColor = 'transparent';

    }, 2000);

    const actualSelection = document.querySelector(`#pc-${CPUSelection}`);
    actualSelection.style.borderColor = 'red';

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
    counterCPUScore = 0;
    counterUserScore = 0;
    consoleLogger.textContent = "Let's start the game, you will play a best of 5, click on your weapon!";
    gameResult.textContent = "";
}


const newGame = document.querySelector('#newgame');
newGame.onclick = resetGame;




