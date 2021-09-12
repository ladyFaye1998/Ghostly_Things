/*Here ghost interactions are stored, with enemies, flagpole, platforms etc.*/


function checkFlagPole() {
    if (world.flagpole.isReached === false) {
        let flag_Char_Distance = Math.abs(((world.flagpole.x + scrollPos) - ghost.position.x));
        world.flagpole.isReached = flag_Char_Distance < 50;
    }
}

function PlatformLogic() {
    let isOnPlatform = false
    for (let i = 0; i < world.platforms.length && !isOnPlatform; i++) {
        if (ghost.gravityState !== 1 && ghost.position.y === world.platforms[i].y_pos && ghost.position.x >= world.platforms[i].x_pos + scrollPos && ghost.position.x <= world.platforms[i].x_pos + world.platforms[i].width + scrollPos) {
            isOnPlatform = true
            ghost.gravityState = 0;
        }
    }
    if(!isOnPlatform && ghost.gravityState === 0 && ghost.position.y !== world.ground){
        ghost.gravityState = -1
    }
}

function lifeLogic() {
    life.resize(20, 20);
    for (let i = 10; i <= endValue_lives; i = i + 20) {
        image(life, i, 75);
    }
}

function isAliveFunc() {
    if (ghost.lifeCount < 1 || world.flagpole.isReached === true) {
        isAlive = false;
        if (isAlive === false) {
            startGameSpace_PlusLives();
        }
    }
}

function checkPlayerDie() {
    if (((ghost.position.y >= canvasHeight) && !hasFallen) || isCloseToEnemy()) {
        hasFallen = true;
        ghost.lifeCount--;
        endValue_lives = endValue_lives - 20;
        if (ghost.lifeCount > 0) {
            startGame();
        }
    }
}

function startGameSpace_PlusLives() {
    let flag_Char_Distance = Math.abs(((world.flagpole.x + scrollPos) - ghost.position.x));
    if (world.flagpole.isReached === true && hasFallen === false && flag_Char_Distance > 50) {
        ghost.didWin = true;
        rect(0, 0, canvasWidth, canvasHeight);
        winner_background.resize(canvasWidth, canvasHeight);
        image(winner_background, 0, 0);
        text('Level complete. Press space to continue.', canvasWidth / 2 - 250, canvasHeight / 2);
        if (!fireworkSound.isPlaying()) {
            fireworkSound.play();
            backgroundMusic.stop();
        }
    } else if (hasFallen === true) {
        fill(0);
        rect(0, 0, canvasWidth, canvasHeight);
        fill(255);

        text('Game over. Press space to continue.', canvasWidth / 2 - 250, canvasHeight / 2);
    }
    if (keyCode === 32) {
        ghost.lifeCount = 3;
        ghost.didWin = false;
        isAlive = true;
        endValue_lives = 50;
        world.flagpole.isReached = false;
        startGame();
    }
}

function isCloseToEnemy()
{
    let isCloseToEnemy = false
    for (let i = 0; i < world.enemies.length && !isCloseToEnemy; i++) {
        let x_distance = Math.abs(ghost.position.x - world.enemies[i].x_pos - scrollPos);
        let y_distance = Math.abs(ghost.position.y - world.enemies[i].y_pos);
        if (x_distance <= 15 && y_distance <= 33) {
            if (!enemyBumpSound.isPlaying()) {
                enemyBumpSound.play();
            }
            return true;
        }
    }
    return false;
}