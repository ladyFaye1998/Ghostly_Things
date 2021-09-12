/*Here all the media that has to be loaded before the game is preloaded, imgs and sounds*/

const loadImages = () => {
    soundImg = loadImage('../../assets/images/sound.png');
    noSoundImg = loadImage('../../assets/images/no-sound.png');
    flag = loadImage('../../assets/images/flag.svg');
    life = loadImage('../../assets/images/life.png');
    winner_background = loadImage('../../assets/images/winBackground.jpg');
}

const loadSounds = () => {
    backgroundMusic = loadSound("../../assets/sounds/music2.mp3");
    backgroundMusic.setVolume(0.008);

    jumpingSound = loadSound("../../assets/sounds/jumpSound.mp3");
    jumpingSound.setVolume(0.1);

    fallingSound = loadSound('../../assets/sounds/falling.wav');
    fallingSound.setVolume(0.01);

    enemyBumpSound = loadSound('../../assets/sounds/monster-bump.wav');
    enemyBumpSound.setVolume(0.01);

    eatingSound = loadSound('../../assets/sounds/eat.wav');
    eatingSound.setVolume(0.1);

    fireworkSound = loadSound('../../assets/sounds/fireworks.wav');
    fireworkSound.setVolume(0.01);
}