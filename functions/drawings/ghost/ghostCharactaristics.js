//responsible for ghost's face

function drawBlush()
{
    noStroke();
    fill(255, 204, 255);
    if(origin_func === "Jump_Facing_Forwards") {
        ellipse(ghost.position.x - 14, ghost.position.y + 5, 7, 5);
        ellipse(ghost.position.x + 14, ghost.position.y + 5, 7, 5);
    }
    else if(origin_func === "jump_Left") {
        ellipse(ghost.position.x, ghost.position.y + 8, 7, 5);
    }
    else if(origin_func === "jump_Right") {
        ellipse(ghost.position.x - 5, ghost.position.y + 3, 7, 5);
    }
    else if(origin_func === "walking_Right")
    {
        ellipse(ghost.position.x + 5, ghost.position.y + 8, 7, 5);
    }
    else if(origin_func === "walking_Left")
    {
        ellipse(ghost.position.x - 2, ghost.position.y + 8, 8, 5);
    }
    else if(origin_func === "drawFrontFacingChar")
    {
        ellipse(ghost.position.x - 11, ghost.position.y + 3, 7, 5);
        ellipse(ghost.position.x + 11, ghost.position.y + 3, 7, 5);
    }
}
function drawHands()
{
    noFill();
    if(origin_func === "Jump_Facing_Forwards") {
        arc(ghost.position.x - 10, ghost.position.y + 20, 5, 15, 1, 1);
        arc(ghost.position.x + 10, ghost.position.y + 20, 5, 15, 1, 1);
    }
    else if(origin_func === "jump_Left") {
        arc(ghost.position.x + 5, ghost.position.y + 20, 5, 15, 2, 1);
    }
    else if(origin_func === "jump_Right") {
        arc(ghost.position.x - 10, ghost.position.y + 18, 5, 15, 2, 1);
    }
    else if(origin_func === "walking_Right")
    {
        ellipse(ghost.position.x - 10, ghost.position.y + 13, 5, 15);
    }
    else if(origin_func === "walking_Left")
    {
        ellipse(ghost.position.x + 8, ghost.position.y + 13, 5, 15);
    }
    else if(origin_func === "drawFrontFacingChar")
    {
        arc(ghost.position.x - 8, ghost.position.y + 17, 5, 15, 6.5, 3);
        arc(ghost.position.x + 8, ghost.position.y + 17, 5, 15, 6.5, 3);
    }
}
function drawMouth()
{
    fill(0);
    if(origin_func === "Jump_Facing_Forwards") {
        ellipse(ghost.position.x, ghost.position.y + 10, 6, 6);
    }
    else if(origin_func === "jump_Left") {
        ellipse(ghost.position.x - 7, ghost.position.y + 15, 6, 9);
    }
    else if(origin_func === "jump_Right") {
        ellipse(ghost.position.x + 8, ghost.position.y + 8, 6, 9);
    }
    else if(origin_func === "walking_Right")
    {
        arc(ghost.position.x + 11, ghost.position.y + 13, 10, 5, 7, 3);
    }
    else if(origin_func === "walking_Left")
    {
        arc(ghost.position.x - 9, ghost.position.y + 14, 10, 5, 4, 8);
    }
    else if(origin_func === "drawFrontFacingChar")
    {
        arc(ghost.position.x, ghost.position.y + 5, 10, 5, 6.5, 3);
    }
}
function drawEyes()
{
    fill(0);
    if(origin_func === "Jump_Facing_Forwards") {
        line(ghost.position.x - 11, ghost.position.y + 2, ghost.position.x - 6, ghost.position.y - 5);
        line(ghost.position.x - 1, ghost.position.y + 2, ghost.position.x - 6, ghost.position.y - 5);

        line(ghost.position.x + 1, ghost.position.y + 2, ghost.position.x + 6, ghost.position.y - 5);
        line(ghost.position.x + 11, ghost.position.y + 2, ghost.position.x + 6, ghost.position.y - 5);
    }
    else if(origin_func === "jump_Left") {
        line(ghost.position.x - 10, ghost.position.y, ghost.position.x - 5, ghost.position.y - 7);
        line(ghost.position.x, ghost.position.y, ghost.position.x - 5, ghost.position.y - 7);
    }
    else if(origin_func === "jump_Right") {
        line(ghost.position.x - 3, ghost.position.y - 3, ghost.position.x + 2, ghost.position.y - 10);
        line(ghost.position.x + 7, ghost.position.y - 3, ghost.position.x + 2, ghost.position.y - 10);
    }
    else if(origin_func === "walking_Right")
    {
        ellipse(ghost.position.x + 5, ghost.position.y, 4, 8);
    }
    else if(origin_func === "walking_Left")
    {
        ellipse(ghost.position.x - 7, ghost.position.y, 4, 8);
    }
    else if(origin_func === "drawFrontFacingChar")
    {
        ellipse(ghost.position.x - 7, ghost.position.y - 2, 5, 5);
        ellipse(ghost.position.x + 7, ghost.position.y - 2, 5, 5);
    }
}

function draw_Characteristics()
{
    //eys
    drawEyes();
    //mouse
    drawMouth();
    //hands
    drawHands();
    //blush
    drawBlush();
}