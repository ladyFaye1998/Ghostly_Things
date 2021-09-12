//Here the ghost movement logic is stored

function useGameLogic() {
    if(!ghost.didWin) {
        movementAndScrollingLogic()
        gravityLogic()
        PlatformLogic();
    }
}

function movementAndScrollingLogic() {
    if (ghost.gravityState !== -2) {
        // Scrolling and movement logic
        if (ghost.movingDirection === -1) {
            if (ghost.position.x > width * 0.2) {
                ghost.position.x += ghost.movingDirection * 5
            } else {
                scrollPos -= ghost.movingDirection * 5
            }
        }
        if (ghost.movingDirection === 1) {
            if (ghost.position.x < width * 0.8) {
                ghost.position.x += ghost.movingDirection * 5
            } else {
                scrollPos -= ghost.movingDirection * 5
            }
        }
    }
}

function gravityLogic() {
    switch (ghost.gravityState) {
        case 1:
            if (ghost.position.y > ghost.maxJump) {
                ghost.position.y = ghost.position.y - 2;
            }
            if (ghost.position.y === ghost.maxJump) {
                ghost.gravityState = -1
            }
            break;
        case -1:
            if (ghost.position.y < world.ground) {
                ghost.position.y = ghost.position.y + 1;
            }
            if (ghost.position.y === world.ground) {
                ghost.gravityState = 0
            }
            break;
    }
}