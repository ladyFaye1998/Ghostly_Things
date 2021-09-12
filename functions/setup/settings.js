/* Here I store all the world setting, where and how to locate different objects, and through here we can control
* some of the object's characteristics */

function define_Collectables() {
    let collectable1 = {x_pos: 600, y_pos: 400, size: 70, isFound: false};
    let collectable2 = {x_pos: 200, y_pos: 400, size: 70, isFound: false};
    let collectable3 = {x_pos: 1500, y_pos: 400, size: 70, isFound: false};

    let collectable4 = {x_pos: 1870, y_pos: 315, size: 70, isFound: false};
    let collectable5 = {x_pos: 3800, y_pos: 400, size: 70, isFound: false};
    let collectable6 = {x_pos: 7240, y_pos: 400, size: 70, isFound: false};
    world.collectables = [collectable1, collectable2, collectable3, collectable4, collectable5, collectable6];
}

function define_Canyons() {
    let canyon1 = {x_pos: 700, width: 90};
    let canyon2 = {x_pos: 40, width: 30};
    let canyon3 = {x_pos: 1130, width: 60};

    let canyon4 = {x_pos: 4000, width: 500};
    let canyon5 = {x_pos: 5555, width: 1500};
    let canyon6 = {x_pos: 8000, width: 80};
    world.canyons = [canyon1, canyon2, canyon3, canyon4, canyon5, canyon6];
}

function define_Mountains() {
    define_far_mountains();
    define_close_mountains();
}

function define_close_mountains() {
    let close_mountain1 = {height: 190, width: 200, x_posM2: 300, y_posM2: 260};
    let close_mountain2 = {height: 190, width: 200, x_posM2: 1000, y_posM2: 260};
    let close_mountain3 = {height: 190, width: 200, x_posM2: 1300, y_posM2: 260};

    let close_mountain4 = {height: 190, width: 200, x_posM2: 2600, y_posM2: 260};
    let close_mountain5 = {height: 190, width: 200, x_posM2: 7500, y_posM2: 260};
    let close_mountain6 = {height: 190, width: 200, x_posM2: 9000, y_posM2: 260};
    let close_mountain7 = {height: 190, width: 200, x_posM2: 5100, y_posM2: 260};
    world.closeMountains = [close_mountain1, close_mountain2, close_mountain3, close_mountain4, close_mountain5, close_mountain6, close_mountain7];
}

function define_far_mountains() {
    let far_mountain1 = {height: 105, width: 120, x_posM1: 400, y_posM1: 330};
    let far_mountain2 = {height: 105, width: 120, x_posM1: 900, y_posM1: 330};
    let far_mountain3 = {height: 105, width: 120, x_posM1: 1400, y_posM1: 330};

    let far_mountain4 = {height: 105, width: 120, x_posM1: 2500, y_posM1: 330};
    let far_mountain5 = {height: 105, width: 120, x_posM1: 7600, y_posM1: 330};
    let far_mountain6 = {height: 105, width: 120, x_posM1: 8900, y_posM1: 330};
    let far_mountain7 = {height: 105, width: 120, x_posM1: 5000, y_posM1: 330};
    world.farMountains = [far_mountain1, far_mountain2, far_mountain3, far_mountain4, far_mountain5, far_mountain6, far_mountain7];
}

function define_Clouds() {
    let Cloud_1_LocX_arr = [265, 275, 225, 250, 220, 210, 220];
    let Cloud_1_LocY_arr = [150, 125, 150, 120, 120, 140, 140];

    let Cloud_2_LocX_arr = [465, 475, 425, 450, 420, 410, 420];
    let Cloud_2_LocY_arr = [200, 175, 200, 170, 170, 190, 190];

    let Cloud_3_LocX_arr = [765, 775, 725, 750, 720, 710, 720];
    let Cloud_3_LocY_arr = [70, 45, 70, 40, 40, 60, 60];

    let cloud1 = {sizeL: 50, sizeS: 40, x_Values: Cloud_1_LocX_arr, y_Values: Cloud_1_LocY_arr, speed: 0.5};
    let cloud2 = {sizeL: 50, sizeS: 40, x_Values: Cloud_2_LocX_arr, y_Values: Cloud_2_LocY_arr, speed: 1};
    let cloud3 = {sizeL: 50, sizeS: 40, x_Values: Cloud_3_LocX_arr, y_Values: Cloud_3_LocY_arr, speed: 0.25};
    world.clouds = [cloud1, cloud2, cloud3];
}

function define_Trees() {
    let trees_x = [100, 800, 1700, 3000, 3600, 5345, 4600, 7860, 8200, 8585, 9710];
    world.trees[0] = {treePos_x: trees_x, treePos_y: 300};
}

function define_flagPole() {
    world.flagpole = {x: 10000, isReached: false}
}

function define_Platform() {
    let platform1 = {x_pos: 1800, y_pos: 300, width: 200, height: 25}
    let platform2 = {x_pos: 2050, y_pos: 250, width: 300, height: 25}
    let platform3 = {x_pos: 5555, y_pos: 300, width: 200, height: 25}

    let platform4 = {x_pos: 4050, y_pos: 300, width: 400, height: 30}
    let platform5 = {x_pos: 6000, y_pos: 250, width: 500, height: 25}
    let platform6 = {x_pos: 6600, y_pos: 200, width: 200, height: 25}
    world.platforms = [platform1, platform2, platform3, platform4, platform5, platform6];
}

function define_Enemies() {
    let enemy1 = {x_pos: 2000, y_pos: 400, moveRange: 100}
    let enemy2 = {x_pos: 4200, y_pos: 320, moveRange: 100}
    let enemy3 = {x_pos: 9300, y_pos: 400, moveRange: 100}

    world.enemies = [enemy1, enemy2, enemy3];
}

// sums up all the above definitions
function defineConstants(){
    define_Trees();
    define_Clouds();
    define_flagPole()
    define_Mountains();
    define_Canyons();
    define_Collectables();
    define_Platform();
    define_Enemies();
}