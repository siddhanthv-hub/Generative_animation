//variables of spriteSheet
let sX = 8;
let sY = 4;
let spriteSheet;


//cel variables
let selW;
let celH;
cels = [];

let x;

function preload() {
  spriteSheet = loadImage("./assets/explosionFull.png")
}
function setup() {
  createCanvas(400, 400);
  //calculating cel width and the height
  celW = spriteSheet.width / sX;
  celH = spriteSheet.height / sY;

  //divide the spritesheet into cels and store it in the array

  for (let i = 0; i < sY; i += 1) {
    for (let j = 0; j < sX; j += 1) {
      cels[i * sX + j] = spriteSheet.get(j * celW, i * celH, celW, celH);
    }
  }
}

function draw() {
  background(15);
  image(cels[frameCount%32], 0, 0)

}
