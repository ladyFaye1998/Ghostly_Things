//Ghost draw logistics

function Character() {
    if(!ghost.didWin) {
        switch (ghost.gravityState) {
            case 0:
                switch (ghost.movingDirection) {
                    case -1:
                        walking_Left();
                        break;
                    case 0:
                        drawFrontFacingChar();
                        break;
                    case 1:
                        walking_Right();
                        break;
                }
                break;
            default:
                switch (ghost.movingDirection) {
                    case -1:
                        jump_Left();
                        break;
                    case 0:
                        Jump_Facing_Forwards();
                        break;
                    case 1:
                        jump_Right();
                        break;
                }
                break;
        }
    }
}