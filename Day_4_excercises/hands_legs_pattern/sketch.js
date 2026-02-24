gSize = 200
let gridImages = [];

function preload() {
  gridImages[0] = loadImage("./assetsHL/01.png")
  gridImages[1] = loadImage("./assetsHL/02.png")
  gridImages[2] = loadImage("./assetsHL/03.png")  
  gridImages[3] = loadImage("./assetsHL/04.png")

}

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(1);
}

function draw() {
  background(220);

  for (let x = 0; x < width; x += gSize) {
    for (let y = 0; y < height; y += gSize) {
      let choice = floor(random(0, gridImages.length));
      console.log(choice);
      image(gridImages[choice], x, y, gSize, gSize)
    }


  }
}
