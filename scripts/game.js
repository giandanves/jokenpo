class Game {
    userScore = 0;
    cpuScore = 0;

    computerSelection() {
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

        if (counterCPUScore == 3) {
            return 'lose';
        } else if (counterUserScore == 3) {
            return 'win';
        }

        else {
            return 'not finished';
        }
    }

    scoreLogger() {
        return `${updateScore(result).toUpperCase} - YOU: ${this.userScore} CPU: ${this.cpuScore}`;
    }

}