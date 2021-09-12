//Draw nature below

function drawFarMountain(index) {
    fill(137, 148, 153);

    let far_mountain = world.farMountains[index];
    var bottomLeftX = far_mountain.x_posM1 - (0.5 * far_mountain.width) - 5;
    var bottomLeftY = far_mountain.y_posM1 + far_mountain.height;
    var bottomRightX = far_mountain.x_posM1 + (0.5 * far_mountain.width) - 5;
    var bottomRightY = bottomLeftY;
    triangle(far_mountain.x_posM1, far_mountain.y_posM1, bottomLeftX, bottomLeftY, bottomRightX, bottomRightY);

    fill(255, 255, 255);
    noStroke();
    beginShape();
    vertex(far_mountain.x_posM1, far_mountain.y_posM1);
    vertex(far_mountain.x_posM1 - 22, far_mountain.y_posM1 + 40);
    vertex(far_mountain.x_posM1 - 10, far_mountain.y_posM1 + 30);
    vertex(far_mountain.x_posM1 - 4, far_mountain.y_posM1 + 46);
    vertex(far_mountain.x_posM1 + 20, far_mountain.y_posM1 + 70);
    vertex(far_mountain.x_posM1 + 22, far_mountain.y_posM1 + 40);
    endShape();
}

function drawCloseMountain(index) {
    let close_mountain = world.closeMountains[index];
    fill(105, 105, 105);
    var bottomLeftX = close_mountain.x_posM2 - (0.5 * close_mountain.width);
    var bottomLeftY = close_mountain.y_posM2 + close_mountain.height;
    var bottomRightX = close_mountain.x_posM2 + (0.5 * close_mountain.width);
    var bottomRightY = bottomLeftY;
    triangle(close_mountain.x_posM2, close_mountain.y_posM2, bottomLeftX, bottomLeftY, bottomRightX, bottomRightY)
    fill(255, 255, 255);
    triangle(close_mountain.x_posM2, close_mountain.y_posM2, bottomLeftX + 80, bottomLeftY - 150, bottomRightX - 80, bottomLeftY - 150)

    VertexTop = bottomLeftY - 150;
    VertexBottom = VertexTop + 10;
    fill(255, 255, 255);
    noStroke();
    beginShape();
    vertex(close_mountain.x_posM2 - 20, VertexTop);
    vertex(close_mountain.x_posM2 - 15, VertexBottom);
    vertex(close_mountain.x_posM2 - 10, VertexTop);
    vertex(close_mountain.x_posM2 - 5, VertexBottom);
    vertex(close_mountain.x_posM2, VertexTop);
    vertex(close_mountain.x_posM2 + 5, VertexBottom);
    vertex(close_mountain.x_posM2 + 10, VertexTop);
    vertex(close_mountain.x_posM2 + 15, VertexBottom);
    vertex(close_mountain.x_posM2 + 20, VertexTop);
    endShape();
}

function drawTree(index) {
    fill(128, 0, 0);
    rect(world.trees[0].treePos_x[index], world.trees[0].treePos_y, 20, 150);

    fill(0, 250, 154);
    triangle(world.trees[0].treePos_x[index] + 10, world.trees[0].treePos_y - 20, world.trees[0].treePos_x[index] - 30, world.trees[0].treePos_y + 80, world.trees[0].treePos_x[index] + 50, world.trees[0].treePos_y + 80);
    triangle(world.trees[0].treePos_x[index] + 10, world.trees[0].treePos_y - 20, world.trees[0].treePos_x[index] - 35, world.trees[0].treePos_y + 105, world.trees[0].treePos_x[index] + 55, world.trees[0].treePos_y + 105);
    triangle(world.trees[0].treePos_x[index] + 10, world.trees[0].treePos_y - 20, world.trees[0].treePos_x[index] - 20, world.trees[0].treePos_y + 30, world.trees[0].treePos_x[index] + 40, world.trees[0].treePos_y + 30);
    triangle(world.trees[0].treePos_x[index] + 10, world.trees[0].treePos_y - 20, world.trees[0].treePos_x[index] - 25, world.trees[0].treePos_y + 55, world.trees[0].treePos_x[index] + 45, world.trees[0].treePos_y + 55);
}

function drawCloud(index) {
    let cloud = world.clouds[index];
    fill(255, 255, 255);
    for (let i = 0; i < cloud.x_Values.length; i++) {
        cloud.x_Values[i] = cloud.x_Values[i] + cloud.speed;
        if (cloud.x_Values[i] === canvasWidth + 150) {
            cloud.x_Values[i] = 0;
        }
        ellipse(cloud.x_Values[i], cloud.y_Values[i], cloud.sizeL, cloud.sizeL);
    }
}

function draw_ground() {

    noStroke();
    fill(0, 155, 0);
    rect(0, height * 3 / 4, width, height / 4); // draw some green ground
}

function draw_sky() {
    background(100, 155, 255); // fill the sky blue
}

function drawCloseMountains() {
    let closeArrLength = world.closeMountains.length;
    for (let i = 0; i < closeArrLength; i++) {
        drawCloseMountain(i);
    }
}

function drawFarMountains() {
    let farArrLength = world.farMountains.length;
    for (let i = 0; i < farArrLength; i++) {
        drawFarMountain(i);
    }
}

function drawCluds() {
    let CloudArrLength = world.clouds.length;
    for (let i = 0; i < CloudArrLength; i++) {
        drawCloud(i);
    }
}

function drawTrees() {
    let treeArrLength = world.trees[0].treePos_x.length;
    for (let i = 0; i < treeArrLength; i++) {
        drawTree(i);
    }
}