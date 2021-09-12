//ghost body
function drawBody_Jump_Facing_Forwards()
{
    strokeWeight(2);
    stroke(51);
    //head
    fill(255);
    arc(ghost.position.x, ghost.position.y, 35, 35, 84.8, 119.5);
    //COLOR
    noStroke();
    beginShape();
    xJumpFront = ghost.position.x;
    yJumpFront = ghost.position.y + 40;
    for (var i = 0; i < 50; i++) {
        vertex(xJumpFront, yJumpFront);
        var startX3 = xJumpFront;
        var startY3 = yJumpFront;
        if (xJumpFront <= (ghost.position.x + 155) && yJumpFront >= (ghost.position.y + 10)) {
            xJumpFront = xJumpFront + 2;
            yJumpFront = yJumpFront - i;
        }
        var endX3 = xJumpFront;
        var endY3 = yJumpFront;
        vertex(endX3, endY3);
    }
    vertex(ghost.position.x + 17.5, ghost.position.y);
    vertex(ghost.position.x, ghost.position.y);

    xJumpFront2 = ghost.position.x;
    yJumpFront2 = ghost.position.y + 40;
    for (var i = 0; i < 50; i++) {
        vertex(xJumpFront2, yJumpFront2);
        var startX4 = xJumpFront2;
        var startY4 = yJumpFront2;
        if (xJumpFront <= (ghost.position.x + 155) && yJumpFront2 >= (ghost.position.y + 5)) {
            xJumpFront2 = xJumpFront2 - 2;
            yJumpFront2 = yJumpFront2 - i;
        }
        var endX4 = xJumpFront2;
        var endY4 = yJumpFront2;
        vertex(endX4, endY4);
    }
    vertex(ghost.position.x - 17.5, ghost.position.y);
    vertex(ghost.position.x, ghost.position.y);
    endShape();
    //body conture
    strokeWeight(2);
    stroke(51);
    xJumpFront = ghost.position.x;
    yJumpFront = ghost.position.y + 40;
    for (var i = 0; i < 50; i++) {
        point(xJumpFront, yJumpFront);
        var startX3 = xJumpFront;
        var startY3 = yJumpFront;
        if (xJumpFront <= (ghost.position.x + 155) && yJumpFront >= (ghost.position.y + 10)) {
            xJumpFront = xJumpFront + 2;
            yJumpFront = yJumpFront - i;
        }
        var endX3 = xJumpFront;
        var endY3 = yJumpFront;
        line(startX3, startY3, endX3, endY3);
    }
    line(ghost.position.x + 17.5, ghost.position.y, endX3, endY3);

    xJumpFront2 = ghost.position.x;
    yJumpFront2 = ghost.position.y + 40;
    for (var i = 0; i < 50; i++) {
        point(xJumpFront2, yJumpFront2);
        var startX4 = xJumpFront2;
        var startY4 = yJumpFront2;
        if (xJumpFront <= (ghost.position.x + 155) && yJumpFront2 >= (ghost.position.y + 5)) {
            xJumpFront2 = xJumpFront2 - 2;
            yJumpFront2 = yJumpFront2 - i;
        }
        var endX4 = xJumpFront2;
        var endY4 = yJumpFront2;
        line(startX4, startY4, endX4, endY4);
    }
    line(ghost.position.x - 17.5, ghost.position.y, endX4, endY4);
}
function drawBody_Jump_Left()
{
    strokeWeight(2);
    stroke(51);
    fill(255);
    arc(ghost.position.x, ghost.position.y, 35, 35, 84.8, 119.5);
    //Color
    noStroke();
    beginShape();

    x = ghost.position.x + 19;
    y = ghost.position.y + 48;
    for (var i = 0; i < 38; i++) {
        vertex(x, y);
        var startX = x;
        var startY = y;
        if (x <= (ghost.position.x + 26) && y >= (ghost.position.y + 5)) {
            x = x - 3.6; // 66
            y = y - i; // we need final 97
        }
        var endX = x;
        var endY = y;
        vertex(endX, endY);
    }
    vertex(ghost.position.x - 17.5, ghost.position.y);

    x2 = ghost.position.x + 19;
    y2 = ghost.position.y + 48;
    for (var i = 0; i < 38; i++) {
        vertex(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= (ghost.position.x + 26) && y2 >= (ghost.position.y + 12)) {
            x2 = x2 - 0.1; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        vertex(endX2, endY2);
    }
    vertex(ghost.position.x + 17.5, ghost.position.y);
    vertex(ghost.position.x - 17.5, ghost.position.y);
    endShape();
    //Body Couture
    strokeWeight(2);
    stroke(51);
    noFill();
    x = ghost.position.x + 19;
    y = ghost.position.y + 48;
    for (var i = 0; i < 38; i++) {
        point(x, y);
        var startX = x;
        var startY = y;
        if (x <= (ghost.position.x + 26) && y >= (ghost.position.y + 5)) {
            x = x - 3.6; // 66
            y = y - i; // we need final 97
        }
        var endX = x;
        var endY = y;
        line(startX, startY, endX, endY);
    }
    line(ghost.position.x - 17.5, ghost.position.y, endX, endY);

    x2 = ghost.position.x + 19;
    y2 = ghost.position.y + 48;
    for (var i = 0; i < 38; i++) {
        point(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= (ghost.position.x + 26) && y2 >= (ghost.position.y + 12)) {
            x2 = x2 - 0.1; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        line(startX2, startY2, endX2, endY2);
    }
    line(ghost.position.x + 17.5, ghost.position.y, endX2, endY2);
}
function drawBody_Jump_Right()
{
    strokeWeight(2);
    stroke(51);
    fill(255);
    arc(ghost.position.x, ghost.position.y, 35, 35, 84.8, 119.5);
    //Color
    noStroke();
    beginShape();
    x = ghost.position.x - 24;
    y = ghost.position.y + 45;
    for (var i = 0; i < 38; i++) {
        vertex(x, y);
        var startX = x;
        var startY = y;
        if (x <= (ghost.position.x + 20) && y >= (ghost.position.y + 15)) {
            x = x + 3.2; // 66
            y = y - i / 2; // we need final 97
        }
        var endX = x;
        var endY = y;
        vertex(endX, endY);
    }
    vertex(ghost.position.x + 17.5, ghost.position.y);

    x2 = ghost.position.x - 24;
    y2 = ghost.position.y + 45;
    for (var i = 0; i < 38; i++) {
        vertex(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= (ghost.position.x + 20) && y2 >= (ghost.position.y + 15)) {
            x2 = x2 + 0.7; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        vertex(endX2, endY2);
    }
    vertex(ghost.position.x - 17.5, ghost.position.y);
    vertex(ghost.position.x + 17.5, ghost.position.y);
    endShape();
    //Body Couture
    strokeWeight(2);
    stroke(51);
    x = ghost.position.x - 24;
    y = ghost.position.y + 45;
    for (var i = 0; i < 38; i++) {
        point(x, y);
        var startX = x;
        var startY = y;
        if (x <= (ghost.position.x + 20) && y >= (ghost.position.y + 15)) {
            x = x + 3.2; // 66
            y = y - i / 2; // we need final 97
        }
        var endX = x;
        var endY = y;
        line(startX, startY, endX, endY);
    }
    line(ghost.position.x + 17.5, ghost.position.y, endX, endY);

    x2 = ghost.position.x - 24;
    y2 = ghost.position.y + 45;
    for (var i = 0; i < 38; i++) {
        point(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= (ghost.position.x + 20) && y2 >= (ghost.position.y + 15)) {
            x2 = x2 + 0.7; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        line(startX2, startY2, endX2, endY2);
    }
    line(ghost.position.x - 17.5, ghost.position.y, endX2, endY2);
}
function drawBody_WalkingRight()
{
    strokeWeight(2);
    stroke(51);
    fill(255);
    arc(ghost.position.x, ghost.position.y, 35, 35, 84.8, 119.5);
    noStroke();
    //Color
    beginShape();
    x = ghost.position.x - 24;
    y = ghost.position.y + 45;
    for (var i = 0; i < 38; i++) {
        vertex(x, y);
        var startX = x;
        var startY = y;
        if (x <= (ghost.position.x + 21) && y >= (ghost.position.y + 14)) {
            x = x + 3.2; // 66
            y = y - i / 2; // we need final 97
        }
        var endX = x;
        var endY = y;
        vertex(endX, endY);
    }
    vertex(ghost.position.x + 17.5, ghost.position.y);

    x2 = ghost.position.x - 24;
    y2 = ghost.position.y + 45;
    for (var i = 0; i < 38; i++) {
        vertex(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= (ghost.position.x + 21) && y2 >= (ghost.position.y + 14)) {
            x2 = x2 + 0.7; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        vertex(endX2, endY2);
    }
    vertex(ghost.position.x - 17.5, ghost.position.y);
    vertex(ghost.position.x + 17.5, ghost.position.y);
    endShape();
    strokeWeight(2);
    stroke(51);

    //Body Couture
    x = ghost.position.x - 24;
    y = ghost.position.y + 45;
    for (var i = 0; i < 38; i++) {
        point(x, y);
        var startX = x;
        var startY = y;
        if (x <= (ghost.position.x + 21) && y >= (ghost.position.y + 14)) {
            x = x + 3.2; // 66
            y = y - i / 2; // we need final 97
        }
        var endX = x;
        var endY = y;
        line(startX, startY, endX, endY);
    }
    line(ghost.position.x + 17.5, ghost.position.y, endX, endY);

    x2 = ghost.position.x - 24;
    y2 = ghost.position.y + 45;
    for (var i = 0; i < 38; i++) {
        point(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= (ghost.position.x + 21) && y2 >= (ghost.position.y + 14)) {
            x2 = x2 + 0.7; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        line(startX2, startY2, endX2, endY2);
    }
    line(ghost.position.x - 17.5, ghost.position.y, endX2, endY2);

}
function drawBody_walking_Left()
{
    fill(255, 255, 255);
    strokeWeight(2);
    stroke(51);
    arc(ghost.position.x, ghost.position.y, 35, 35, 84.8, 119.5);
    noStroke();
    beginShape();

    //COLOR
    x = ghost.position.x + 19;
    y = ghost.position.y + 48;
    for (var i = 0; i < 38; i++) {
        vertex(x, y);
        var startX = x;
        var startY = y;
        if (x <= (ghost.position.x + 226) && y >= (ghost.position.y + 5)) {
            x = x - 3.6;
            y = y - i;
        }
        var endX = x;
        var endY = y;
        vertex(endX, endY);
    }
    vertex(ghost.position.x - 17.5, ghost.position.y);

    x2 = ghost.position.x + 19;
    y2 = ghost.position.y + 48;
    for (var i = 0; i < 38; i++) {
        vertex(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= (ghost.position.x + 19) && y2 >= (ghost.position.y + 12)) {
            x2 = x2 - 0.1;
            y2 = y2 - i;
        }
        var endX2 = x2;
        var endY2 = y2;
        vertex(endX2, endY2);
    }
    vertex(ghost.position.x + 17.5, ghost.position.y);
    vertex(ghost.position.x, ghost.position.y);
    vertex(ghost.position.x - 17.5, ghost.position.y);
    endShape();
    //Body Couture
    strokeWeight(2);
    stroke(51);
    x = ghost.position.x + 19;
    y = ghost.position.y + 48;
    for (var i = 0; i < 38; i++) {
        point(x, y);
        var startX = x;
        var startY = y;
        if (x <= (ghost.position.x + 226) && y >= (ghost.position.y + 5)) {
            x = x - 3.6; // 66
            y = y - i; // we need final 97
        }
        var endX = x;
        var endY = y;
        line(startX, startY, endX, endY);
    }
    line(ghost.position.x - 17.5, ghost.position.y, endX, endY);

    x2 = ghost.position.x + 19;
    y2 = ghost.position.y + 48;
    for (var i = 0; i < 38; i++) {
        point(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= (ghost.position.x + 19) && y2 >= (ghost.position.y + 12)) {
            x2 = x2 - 0.1; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        line(startX2, startY2, endX2, endY2);
    }
    line(ghost.position.x + 17.5, ghost.position.y, endX2, endY2);

}
function  drawBody_drawFrontFacingChar()
{
    fill(255, 255, 255);
    strokeWeight(2);
    stroke(51);
    arc(ghost.position.x, ghost.position.y, 35, 35, 84.8, 119.5);

    //Body Couture
    x = ghost.position.x - 24;
    y = ghost.position.y + 45;

    x2 = ghost.position.x - 24;
    y2 = ghost.position.y + 45;
    //color of body
    noStroke();
    beginShape();
    xLimit = x + 45;
    yLimit = y - 31;
    for (var i = 0; i < 38; i++) {
        vertex(x, y);
        if (x <= xLimit && y >= yLimit) {
            x = x + 3.2; // 66
            y = y - i / 2; // we need final 97
        }
        var endX = x;
        var endY = y;
        vertex(endX, endY);
    }

    for (var i = 0; i < 38; i++) {
        vertex(x2, y2);
        if (x2 <= xLimit && y2 >= yLimit) {
            x2 = x2 + 0.7; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        vertex(endX2, endY2);
    }
    vertex(ghost.position.x - 17.5, ghost.position.y);
    vertex(ghost.position.x + 17.5, ghost.position.y);
    vertex(endX, endY);
    endShape(CLOSE);

    //stroke of body
    x = ghost.position.x - 24 + 0.1;
    y = ghost.position.y + 45 + 0.1;

    x2 = ghost.position.x - 24 - 0.1;
    y2 = ghost.position.y + 45 - 0.1;
    strokeWeight(2);
    stroke(51);
    for (var i = 0; i < 38; i++) {
        point(x2, y2);
        var startX2 = x2;
        var startY2 = y2;
        if (x2 <= xLimit && y2 >= yLimit) {
            x2 = x2 + 0.7; // 66
            y2 = y2 - i; // we need final 97
        }
        var endX2 = x2;
        var endY2 = y2;
        line(startX2, startY2, endX2, endY2);
    }
    line(ghost.position.x - 17.5, ghost.position.y, endX2, endY2);

    for (var i = 0; i < 38; i++) {
        point(x, y);
        var startX = x;
        var startY = y;
        if (x <= xLimit && y >= yLimit) {
            x = x + 3.2; // 66
            y = y - i / 2; // we need final 97
        }
        var endX = x;
        var endY = y;
        line(startX, startY, endX, endY);
    }
    line(ghost.position.x + 17.5, ghost.position.y, endX, endY);
}

function drawFrontFacingChar() {
    origin_func = "drawFrontFacingChar";
    drawBody_drawFrontFacingChar();
    draw_Characteristics();
}

function walking_Left() {
    origin_func = "walking_Left";
    drawBody_walking_Left();
    draw_Characteristics();
}

function walking_Right() {
    origin_func = "walking_Right";
    drawBody_WalkingRight();
    draw_Characteristics();
}

function jump_Right() {
    origin_func = "jump_Right"
    drawBody_Jump_Right();
    draw_Characteristics();
}

function jump_Left() {
    origin_func = "jump_Left";
    drawBody_Jump_Left();
    draw_Characteristics();
}

function Jump_Facing_Forwards() {
    origin_func = "Jump_Facing_Forwards";
    drawBody_Jump_Facing_Forwards();
    draw_Characteristics();
}