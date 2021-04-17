import Game from './game.js';
import GameScreen from './game-screen.js';
import StartScreen from './start-screen.js';
import GameOverScreen from './game-over-screen.js';


let history = [];
let currentScreen;
let roundsCounter = 0;

function onNewGameClick() {
    currentScreen.stop();
    currentScreen = new GameScreen(new Game, onNewGameClick, onGameOver);
    currentScreen.handleReset();
}

function onGameOver(game) {
    history.push(game);
    console.log(game);
    roundsCounter++;
    currentScreen.stop();
    currentScreen = new GameOverScreen(onNewGameClick, game, roundsCounter);
    currentScreen.renderHistory();
}



function initApp() {
    currentScreen = new StartScreen(onNewGameClick);
};

initApp();
