
class GameOverScreen {
    constructor(onGameOver, restartApp) {
        this.gameOverScreen = document.querySelector("#gameover-screen");
        this.gameOverScreen.style.display = "block";
        document.body.style.background = "#483D8B";
        this.restartApp = restartApp;
        this.button = document.querySelector("#back-button");
        this.button.onclick = this.restartApp;

    }




    stop() {
        this.gameOverScreen.style.display = "none";
    }


}

export default GameOverScreen;
