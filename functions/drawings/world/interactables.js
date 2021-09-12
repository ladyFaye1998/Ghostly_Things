/*Here we draw the objects with which the ghost can interact is someway*/

//Draws the flagpole at the end of the gamerange
function renderFlagpole() {
    fill(192, 192, 192);
    rect(world.flagpole.x, world.ground - 120, 10, 180);

    flag.resize(75, 42);
    if (world.flagpole.isReached === true) {
        image(flag, world.flagpole.x + 10, world.ground - 120);
    } else {
        image(flag, world.flagpole.x + 10, world.ground - 20);
    }
}

//Draws the platforms
function drawPlatfoms() {
    fill(0, 155, 0);
    for (let i = 0; i < world.platforms.length; i++) {
        rect(world.platforms[i].x_pos, world.platforms[i].y_pos + 50, world.platforms[i].width, world.platforms[i].height);
    }
}

//Draws canyons
function drawCanyon(index) {
    canyon1 = world.canyons[index];
    fill(100, 155, 255);
    rect(canyon1.x_pos, 432, canyon1.width, 150);
    fill(128, 0, 0);
    triangle(canyon1.x_pos, 432, canyon1.x_pos - 5, 582, canyon1.x_pos + 5, 582);
    triangle(canyon1.x_pos + canyon1.width, 432, canyon1.x_pos + canyon1.width - 5, 582, canyon1.x_pos + canyon1.width + 5, 582);
}

//Draws apples
function drawCollectableItem(index) {
    let collectable = world.collectables[index];
    noStroke();
    push();
    translate(collectable.x_pos, collectable.y_pos);
    fill(204, 55, 51);
    ellipse(0, 0, collectable.size, collectable.size * 0.9375);
    stroke(78, 38, 0);
    strokeWeight(5);
    line(-5, -50, 0, -25);
    noStroke();
    rotate(radians(-30));
    fill(39, 166, 21);
    ellipse(7, -33, collectable.size * (15 / 80), collectable.size * (25 / 80))
    pop()
}

//The funcs below draw all the object defined in settings
function drawCollectables() {
    let collectablesArrLength = world.collectables.length;
    for (let i = 0; i < collectablesArrLength; i++) {
        let current_collectable = world.collectables[i];
        let d = dist(ghost.position.x, ghost.position.y, current_collectable.x_pos + scrollPos, current_collectable.y_pos);

        if (d <= 50) {
            if (current_collectable.isFound === false) {
                current_collectable.isFound = true;
                ghost.score = ghost.score + 1;
                eatingSound.play();
            }
        }

        if (current_collectable.isFound === false) {
            drawCollectableItem(i);
        }
    }
}

function drawCanyons() {
    let canyonArrLength = world.canyons.length;
    for (let i = 0; i < canyonArrLength; i++) {
        drawCanyon(i);
    }
    for (let i = 0; i < canyonArrLength; i++) {
        let CurrentCanyon = world.canyons[i];
        if ((ghost.position.x > CurrentCanyon.x_pos + scrollPos) && (ghost.position.x < (CurrentCanyon.x_pos + CurrentCanyon.width + scrollPos)) && ghost.position.y >= world.ground) {
            ghost.gravityState = -2;
            if (!fallingSound.isPlaying()) {
                fallingSound.play()
            }
            ghost.position.y = ghost.position.y + 2;
            break;
        }
    }
}

function information_corner() {
    textSize(32);
    fill(0);
    text('Score: ' + ghost.score, 10, 30);
    text('Lives: ' + ghost.lifeCount, 10, 60);

    if (musicPlaying) {
        soundImg.resize(25, 25);
        image(soundImg, 85, 70);
    } else {
        noSoundImg.resize(25, 25);
        image(noSoundImg, 85, 70);
    }
}

function draw_enemy()
{
    fill(0, 0, 0);
    for(let i = 0; i < world.enemies.length; i++) {
        ellipse(world.enemies[i].x_pos, world.enemies[i].y_pos, 50, 50);
        fill(255, 255, 255);
        ellipse(world.enemies[i].x_pos - 10, world.enemies[i].y_pos, 15, 15);
        ellipse(world.enemies[i].x_pos + 10, world.enemies[i].y_pos, 15, 15);
        fill(0, 0, 0);
        //enemyGoLeft(i);
        if(isEnemyGoingRight){
            enemyGoRight(i);
            moveRange_enemy = moveRange_enemy + 1;
            world.enemies[i].x_pos = world.enemies[i].x_pos + 1;
            if(moveRange_enemy === 250)
            {
                isEnemyGoingRight = false;
            }
        }
        else if(!isEnemyGoingRight){
            enemyGoLeft(i);
            moveRange_enemy = moveRange_enemy - 1;
            world.enemies[i].x_pos = world.enemies[i].x_pos - 1;
            if(moveRange_enemy === 0)
            {
                isEnemyGoingRight = true;
            }
        }
    }
}

function enemyGoLeft(index)
{
    fill(0, 0, 0);
    ellipse(world.enemies[index].x_pos - 14, world.enemies[index].y_pos, 7, 7);
    ellipse(world.enemies[index].x_pos + 7, world.enemies[index].y_pos, 7, 7);
}
function enemyGoRight(index)
{
    fill(0, 0, 0);
    ellipse(world.enemies[index].x_pos - 7, world.enemies[index].y_pos, 7, 7);
    ellipse(world.enemies[index].x_pos + 14, world.enemies[index].y_pos, 7, 7);
}
