gSize=50

let gridImages = [];

function preload() {


  gridImages[0] = loadImage("./assets/gArt-00.png")
  gridImages[1] = loadImage("./assets/gArt-01.png")
  gridImages[2] = loadImage("./assets/gArt-02.png")
  gridImages[3] = loadImage("./assets/gArt-03.png")

}

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10)
}

function draw() {

  background(15);

  for (let x = 0; x <width; x += gSize) {
    for (let y = 0; y <height; y += gSize) {
      let choice = floor(random(0, gridImages.length));
      image(gridImages[choice], x, y, gSize, gSize);

    }
  }
}



/*
gSize = 50

let colours = ["#0B2D72", "#0992C2", "#0AC4E0", "#F6E7BC"]

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10)
}

function draw() {

  for (let x = 0; x < innerWidth; x += gSize) {
    for (let y = 0; y < innerHeight; y += gSize) {

      let choice = floor(random(0, 4));  // it can be also floor(random(0,colours.length))
      fill(colours[choice])
      noStroke()
      rect(x, y, 50, 50)
      ellipse
    }
  }


}*/




