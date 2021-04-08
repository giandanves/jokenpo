
class GameOverScreen {
    constructor(onNewGameClick, game, roundsCounter) {
        this.game = game;
        this.gameOverScreen = document.querySelector("#gameover-screen");
        this.gameOverScreen.style.display = "block";
        document.body.style.background = "#483D8B";
        this.roundsCounter = roundsCounter;
        this.onNewGameClick = onNewGameClick;
        this.button = document.querySelector("#new-game");
        this.button.onclick = this.onNewGameClick;
        this.resultBox = document.querySelector("#gameresults");

    }



    stop() {
        this.gameOverScreen.style.display = "none";
    }

    renderHistory() {
        const actualResult = document.createElement('p');
        actualResult.className = ('roundresult');
        if (this.roundsCounter % 2 == 0) {
            actualResult.style.backgroundColor = "#6e3d8b";
        }

        actualResult.textContent = `Game ${this.roundsCounter}: ${this.game.finalScore}`;
        this.resultBox.appendChild(actualResult);
    }




}

export default GameOverScreen;
