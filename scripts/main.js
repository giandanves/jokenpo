import Game from './game.js';
import GameScreen from './game-screen.js';
import StartScreen from './start-screen.js';
import GameOverScreen from './game-over-screen.js';


let history = [];
let currentScreen;

function onNewGameClick() {
    currentScreen.stop();
    currentScreen = new GameScreen(new Game, onNewGameClick, onGameOver);
}

function onGameOver() {
    history.push(game);
    currentScreen.stop();
    currentScreen = new GameOverScreen(onGameOver, restartApp);
    console.log(history);
}

function restartApp() {
    currentScreen.stop();
    initApp();
}


function initApp() {
    currentScreen = new StartScreen(onNewGameClick);
};

initApp();
