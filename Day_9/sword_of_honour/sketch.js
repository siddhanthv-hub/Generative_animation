
let gameState = "start";   // "start" or "play"

let introScreen;

// Spritesheet variables
let sX = 4;
let sY = 1;
let spriteSheet;

//cel variables
let celW, celH;
let cels = [];

//Samurai variables

let samurai = [];
let samuraiW;
let xSpeed = 0;
let isAnimating = false;
let wX = 0;
let wY = 0;
let frameIndex = 0;   // which sprite frame to show
let frameSpeed = 5;   // animation speed control

//Scene variables'


let bgs = [];
let fgs = [];
let gates = [];
let question = [];
let optionA = [];
let optionB = [];

//scene variable
let scene = 0;
let totalScenes = 6;
let gXPos = 1550;


// Gate animation variables
let gateY = 650;      // starting Y position
let gateSpeed = 1;    // slow movement speed
let gateRange = 20;   // how much it moves up and down

//mpnk variable
let monk;


let showPressArrow = true;

//bg music
let bgMusic;


//uploading 6 images, monk and samurai

function preload() {
  for (let i = 0; i < totalScenes; i++) {

    bgs[i] = loadImage("./assets/bg" + i + ".png")
    fgs[i] = loadImage("./assets/fg" + i + ".png")
    gates[i] = loadImage("./assets/gate" + i + ".png")

    question[i] = loadImage("./assets/Ques" + i + ".png")
    optionA[i] = loadImage("./assets/opA" + i + ".png")
    optionB[i] = loadImage("./assets/opB" + i + ".png")
  }
  spriteSheet = loadImage("./assets/samurai.png");
  monk = loadImage("./assets/monk.png")
  sword = loadImage("./assets/Final.png")
  Master = loadImage("./assets/Master.png")
  congrats = loadImage("./assets/congrats.png")
  pressarrow = loadImage("./assets/pressarrow.png")
  refresh = loadImage("./assets/refresh.png")
  introScreen = loadImage("./assets/intro.png");

  bgMusic = loadSound("./sound/alone_samurai.mp3")

}


function setup() {
  createCanvas(1920, 1080);
  wY = 0.5 * height;
  userStartAudio();
   // PLAY MUSIC ONLY ONCE AT START
  bgMusic.play();

  // FIRST calculate cel size
  celW = spriteSheet.width / sX;
  celH = spriteSheet.height / sY;

  // THEN calculate samurai width
  samuraiW = celW / 4;

  // break spritesheet
  for (let i = 0; i < sY; i++) {
    for (let j = 0; j < sX; j++) {
      cels[i * sX + j] = spriteSheet.get(j * celW, i * celH, celW, celH);
    }
  }
}


//Show current scene

function draw() { 
  //draw scenes
  //bg
  image(bgs[scene], 0, 0, width, height);

  // Only show samurai if NOT final scene
  if (scene !== 5) {

    if (keyIsPressed) {

      // Move
      wX += xSpeed;

      // Stop at left edge of screen
      if (wX < 0) {
        wX = 0;
      }

      // Gate left edge
      let gateLeft = gXPos;

      // STOP exactly when touching gate
      if (wX + samuraiW >= gateLeft) {
        wX = gateLeft - samuraiW;
      }

      // Animation
      if (frameCount % frameSpeed == 0) {
        frameIndex++;
        if (frameIndex >= sX) {
          frameIndex = 0;
        }
      }

      image(cels[frameIndex], wX, wY, celW / 4, celH / 4);

    } else {

      image(cels[0], wX, wY, celW / 4, celH / 4);
    }
  }

  if (scene == 5) {
    image(sword, 0, 0, width, height);
  }

  // foreground
  image(fgs[scene], 0, 0, width, height);

  if (scene < 5) {

    // Gate up-down automatic motion
    gateY += gateSpeed;

    if (gateY > 650 + gateRange || gateY < 650 - gateRange) {
      gateSpeed *= -1;
    }

    image(gates[scene], gXPos, gateY, 300, 300);
  }

  //draw initial Dialogue, 

  if (scene == 0) {
    image(Master, 0, 0, width, height)
  }

  // Show pressarrow ONLY before samurai crosses middle
  if (scene == 0 && showPressArrow) {
    image(pressarrow, 0, 0, width, height);
  }

  if (wX + samuraiW >= gXPos) {
    //draw buttons
    image(question[scene], 0, 0, width, height);
    imageMode(CENTER);

    // OPTION A position (center)
    let aX = 620;
    let aY = 500;

    // OPTION B position (center)
    let bX = 1280;
    let bY = 500;

    // Get original image size
    let aW = optionA[scene].width;
    let aH = optionA[scene].height;

    let bW = optionB[scene].width;
    let bH = optionB[scene].height;

    // Hover detection using real size
    let scaleA = 1;
    if (mouseX > aX - aW / 2 && mouseX < aX + aW / 2 &&
      mouseY > aY - aH / 2 && mouseY < aY + aH / 2) {
      scaleA = 1.1;
    }

    let scaleB = 1;
    if (mouseX > bX - bW / 2 && mouseX < bX + bW / 2 &&
      mouseY > bY - bH / 2 && mouseY < bY + bH / 2) {
      scaleB = 1.1;
    }

    // Draw using original size
    image(optionA[scene], aX, aY, aW * scaleA, aH * scaleA);
    image(optionB[scene], bX, bY, bW * scaleB, bH * scaleB);

    imageMode(CORNER);
  }

  if (scene == 5) {

    image(congrats, 0, 0, width, height);

    imageMode(CENTER);

    let rX = 500;
    let rY = 500;

    let rW = refresh.width;
    let rH = refresh.height;

    let scaleR = 1;

    // Hover detection (center mode)
    if (mouseX > rX - rW / 2 && mouseX < rX + rW / 2 &&
      mouseY > rY - rH / 2 && mouseY < rY + rH / 2) {
      scaleR = 1.1;   // 10% bigger
    }

    image(refresh, rX, rY, rW * scaleR, rH * scaleR);

    imageMode(CORNER);
  }



  //draw monk
  image(monk, 20, 20, 200, 200);
}

//samurai walk if right arrow is pressed samurai will go towards the gate and stop at the gate

function keyPressed() {

  showPressArrow = false;   // Hide press arrow immediately

  if (keyCode == RIGHT_ARROW) {
    xSpeed = 20;
  }
  else if (keyCode == LEFT_ARROW) {
    xSpeed = -20;
  }
}

//changing Scene- if mouse is pressed on option A or option B scene will change 
function mousePressed() {

  //option A area variable

  let aX = 550;
  let aY = 450;
  let aW = width / 5;
  let aH = height / 4;

  //option B area variable
  let bX = 1000;
  let bY = 450;
  let bW = width / 5;
  let bH = height / 4;

  // @ scene 0 - option A - goes to scene 2
  if (mouseX > aX && mouseX < aX + aW &&
    mouseY > aY && mouseY < aY + aH
    && scene == 0
  ) {
    scene = 2;
    wX = 0;
  }

  // @ scene 1 - option A - goes to scene 3
  else if (mouseX > aX && mouseX < aX + aW &&
    mouseY > aY && mouseY < aY + aH
    && scene == 1
  ) {
    scene = 3;
    wX = 0;
  }


  // @ scene 2 - option A - goes to scene 1
  else if (mouseX > aX && mouseX < aX + aW &&
    mouseY > aY && mouseY < aY + aH
    && scene == 2
  ) {
    scene = 1;
    wX = 0;
  }


  // @ scene 3 - option A - goes to scene 4
  else if (mouseX > aX && mouseX < aX + aW &&
    mouseY > aY && mouseY < aY + aH
    && scene == 3
  ) {
    scene = 4;
    wX = 0;
  }
  // @ scene 4 - option A - goes to scene 5
  else if (mouseX > aX && mouseX < aX + aW &&
    mouseY > aY && mouseY < aY + aH
    && scene == 4
  ) {
    scene = 5
    wX = 0;
  }


  // @ scene 0 - option B - goes to scene 1
  else if (mouseX > bX && mouseX < bX + bW &&
    mouseY > bY && mouseY < bY + bH
    && scene == 0
  ) {
    scene = 1;
    wX = 0;
  }

  // @ scene 1 - option B - goes to scene 2
  else if (mouseX > bX && mouseX < bX + bW &&
    mouseY > bY && mouseY < bY + bH
    && scene == 1
  ) {
    scene = 2;
    wX = 0;
  }
  // @ scene 2 - option B - goes to scene 3
  else if (mouseX > bX && mouseX < bX + bW &&
    mouseY > bY && mouseY < bY + bH
    && scene == 2
  ) {
    scene = 3;
    wX = 0;
  }
  // @ scene 3 - option B - goes to scene 2
  else if (mouseX > bX && mouseX < bX + bW &&
    mouseY > bY && mouseY < bY + bH
    && scene == 3
  ) {
    scene = 1;
    wX = 0;
  }
  // @ scene 4 - option B - goes to scene 0
  else if (mouseX > bX && mouseX < bX + bW &&
    mouseY > bY && mouseY < bY + bH
    && scene == 4
  ) {
    scene = 0;
    wX = 0;
  }

  // Refresh button click (only in scene 5)
  if (scene == 5) {

    let rX = 500;
    let rY = 500;
    let rW = refresh.width;
    let rH = refresh.height;

    if (mouseX > rX && mouseX < rX + rW &&
      mouseY > rY && mouseY < rY + rH) {

      location.reload();  // reload page
    }
  }

}









