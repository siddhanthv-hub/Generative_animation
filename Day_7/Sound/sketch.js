let mySound;

function preload() {
  soundFormats("mp3")
  mySound = loadSound("./sounds/0.mp3")
  myBg = loadSound("./bgloops/2.mp3")
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(15);

}
function draw() {
  ellipse(200, 200, 50, 50)
}

function mousePressed() {
  if (mouseX) {
    fill(120, 120, 300)
    ellipse(mouseX, mouseY, 50)
    mySound.play();
    myBg.play();
  }

}