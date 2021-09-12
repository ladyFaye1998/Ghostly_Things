/*Coding wasn't completely new to me, but the use of basic concepts in such a way definitely was new
* in someways, it turns out that coding a game was simpler than I thought, but I faced problems I didn't think I'd
* I added at this point the p5 sound library. and split the code because it was starting to be way too messy.
*
* I found difficult to work out the movement logics, and especially the platform logistics. Previously the ghost's jump
* logic was depandent on the 'groud' variable, I had to rethink almost everything when the need to code platform appeared.
*
* What did I learn? The magic of debugging! At many times I just didn't understand what is going on, but debugging and printing
* variables to the console, I think, saved my day.
*
* PS. I like the clouds as they are, it's my artistic choice.*/

// Tracks the game scroll
let scrollPos;

// Canvas dims globals
let canvasWidth;
let canvasHeight;

let isAlive;
let hasFallen;
let origin_func;
let endValue_lives;
let moveRange_enemy;
let isEnemyGoingRight;

let world = {
    ground: 0,
    collectables: [],
    platforms: [],
    canyons: [],
    enemies: [],
    clouds: [],
    trees: [],
    closeMountains: [],
    farMountains: [],
    flagpole: {
        x: 0,
        isReached: false,

    },

}

let ghost = {
    position: {
        x: 0,
        y: 0,
        width: 50,
    },
    lifeCount: 0,
    score: 0,
    // left, stale, or right via -1, 0, 1 accordingly.
    movingDirection: 0,
    // plummeting, falling, stale or jumping via -2, -1, 0, 1
    gravityState: 0,
    maxJump: 100,
    didWin: false,
}

// Images
let soundImg;
let noSoundImg;
let flag;
let life;
let winner_background;

// Sounds
let backgroundMusic;
let jumpingSound;
let fallingSound;
let eatingSound;
let fireworkSound;

//flag for playing background music
let musicPlaying;

function preload() {
    loadImages()
    loadSounds()
}

function setup() {
    isEnemyGoingRight = true;
    musicPlaying = false
    canvasWidth = 1200;
    canvasHeight = 576;
    createCanvas(canvasWidth, canvasHeight);
    ghost.lifeCount = 3;
    ghost.score = 0;
    endValue_lives = 50;
    isAlive = true;
    moveRange_enemy = 0;
    startGame();
}

function draw() {

    draw_sky();
    draw_ground();

    information_corner()

    lifeLogic();
    drawCluds();

    //draw nature with implemented scrolling
    push();
    translate(scrollPos, 0)
    drawFarMountains()
    drawTrees();
    drawCanyons();
    drawCollectables();
    drawCloseMountains();
    drawPlatfoms();

    draw_enemy();
    checkFlagPole();
    renderFlagpole();
    pop()

    checkPlayerDie();
    isAliveFunc();
    Character();
    useGameLogic();

    console.log(ghost.position.x - scrollPos);
}

//Key Listeners
function mousePressed() {
    if (musicPlaying) {
        musicPlaying = 0;
        if (backgroundMusic.isPlaying()) {
            backgroundMusic.stop();
        }
    } else {
        musicPlaying = 1;
        if (!backgroundMusic.isPlaying()) {
            backgroundMusic.loop();
        }
    }
    userStartAudio();
}

function keyPressed() {
    if (key === 'A' || keyCode === 37) {
        ghost.movingDirection = -1;
    }
    if (key === 'D' || keyCode === 39) {
        ghost.movingDirection = 1;
    }
    if (keyCode === 32) {
        // Start a jump if you are in a stale gravity state
        if (ghost.gravityState === 0) {
            if (!jumpingSound.isPlaying()) {
                jumpingSound.play()
            }
            ghost.gravityState = 1
            ghost.maxJump = ghost.position.y - 100
        }
    }
}

function keyReleased() {
    if (key === 'A' || keyCode === 37) {
        if(ghost.movingDirection === -1) {
            ghost.movingDirection = 0;
        }
    }

    if (key === 'D' || keyCode === 39) {
        if(ghost.movingDirection === 1) {
            ghost.movingDirection = 0;
        }
    }
}

function startGame() {
    ghost.position.x = width / 2 + 50;
    ghost.position.y = height * 3 / 4 - 50;

    // Boolean variables to control the movement of the game character.
    ghost.movingDirection = 0;
    ghost.gravityState = 0;
    hasFallen = false;
    world.ground = ghost.position.y;
    ghost.score = 0;

    // Variable to control the background scrolling.
    scrollPos = 0;
    defineConstants();
}
