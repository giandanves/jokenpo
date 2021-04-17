
class Game {

    constructor() {
        this.userScore = 0;
        this.cpuScore = 0;
        this.finalScore = '';
    }

    get actualUserScore() {
        return this.userScore;
    }

    get actualCpuScore() {
        return this.cpuScore;
    }

    computerSelection() {

        const options = ['rock', 'paper', 'scissors'];

        let random = Math.floor(Math.random() * options.length);
        let CPUSelection = options[random];
        return CPUSelection;
    }


    round(playerSelection, computerSelection) {
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

    updateScore(result) {
        if (result == 'win') {
            this.userScore++;

        } else if (result == 'lose') {
            this.cpuScore++;

        }

        if (this.cpuScore == 3) {
            return 'lose';
        } else if (this.userScore == 3) {
            return 'win';
        }

        else {
            return 'not finished';
        }
    }

    scoreLogger(result) {
        this.finalScore = `${result.toUpperCase()} - YOU: ${this.userScore} CPU: ${this.cpuScore}`;
        return this.finalScore;
    }

}


export default Game;