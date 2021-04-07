


class StartScreen {
    constructor(onNewGameClick) {
        this.startScreen = document.querySelector("#start-screen");
        document.body.style.background = "#ffbea7"
        this.startScreen.style.display = "block";
        this.onNewGameClick = onNewGameClick;
        this.button = document.querySelector("#start-game");
        this.button.onclick = this.onNewGameClick;
    }




    stop() {
        this.startScreen.style.display = "none";
    }


}



export default StartScreen;
