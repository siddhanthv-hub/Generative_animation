// Spritesheet variables
let sX = 4;
let sY = 1;
let spriteSheet;

//cel variables
let celW, celH;
let cels = [];

//Samurai variables

let samurai = [];
let xSpeed = 0;
let isAnimating = false;
let wX = 0;
let wY = 0;

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

//mpnk variable
let monk;


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

}


function setup() {
  createCanvas(1920, 1080);
  // imageMode(CENTER);
  wY = 0.5 * height;

  //calculating the cel width and height
  celW = spriteSheet.width / sX;
  celH = spriteSheet.height / sY;
  //breaking the spritesheet into cels and storing it in an array
  for (let i = 0; i < sY; i += 1) {
    for (let j = 0; j < sX; j += 1) {
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

    // Idle pose
    if (isAnimating == false) {
      image(cels[0], wX, wY, celW / 4, celH / 4);
    }

    // Movement
    if (keyIsPressed && wX < gXPos + 10) {
      wX += xSpeed;
    }
  }
  if (scene == 5) {
    image(sword, 0, 0, width, height);
  }

  // foreground
  image(fgs[scene], 0, 0, width, height);

  //gates
  image(gates[scene], gXPos, 650, 300, 300);

  //draw initial Dialogue, 

  if (scene == 0) {
    image(Master, 0, 0, width, height)
  }

  if (scene == 0 && wX < gXPos + 10) {
    image(pressarrow, 0, 0, width, height)
  }

  if (wX > gXPos) {
    //draw buttons
    image(question[scene], 0, 0, width, height);
    image(optionA[scene], 550, 450, width / 5, height / 4);
    image(optionB[scene], 1000, 450, width / 5, height / 4);
  }
    if (scene == 5) {
    image(refresh, 0, 0, width, height)
  }
  if (scene == 5) {
    image(congrats,0 , 0, width, height)
  }



  //draw monk
  image(monk, 20, 20, 200, 200);
}

//samurai walk if right arrow is pressed samurai will go towards the gate and stop at the gate
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    xSpeed = 50;
  }
  else if (keyCode == LEFT_ARROW) {
    xSpeed = -50;
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

}









