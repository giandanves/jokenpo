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
    console.log('You chose ' + playerSelection);
    console.log('CPU chose ' + computerSelection);

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

function scoreChecker(result, playerSelection, computerSelection) {
    const userScore = document.querySelector('#user-score');
    const cpuScore = document.querySelector('#cpu-score');
    const consoleLogger = document.querySelector('#console-logger');
    const gameResult = document.querySelector('#game-result');
    let textResult = '';
    let finalResult = '';

    if (result == 'win') {
        counterUserScore++;
        userScore.textContent = `${counterUserScore}`;
        textResult = ", so you win this round!";
    } else if (result == 'lose') {
        counterCPUScore++;
        cpuScore.textContent = `${counterCPUScore}`;
        textResult = ", so you lose this round!";
    } else {
        textResult = ", so it's a draw! Choice again!";
    }

    consoleLogger.textContent = `You chose ${playerSelection} and CPU's choice is ${computerSelection}${textResult}`;

    if (counterCPUScore == 3 || counterUserScore == 3) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;



        if (counterCPUScore == 3) {
            finalResult = 'lose! Good luck in next!';
        } else {
            finalResult = 'win! Tua família te ama e te espera.';
        }
        gameResult.textContent = `It's over! You ${finalResult}`;

    }

}

function consoleLoggerChange() {

}



function game() {

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
    scoreChecker(result, selection, CPUSelection);
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


//for (let i = 0; i < 5; i++) }




