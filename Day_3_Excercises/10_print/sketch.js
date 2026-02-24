let gSize = 40;
let xPos = 0;
let yPos = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

/*
function draw() {
  
  rect  (xPos,yPos,gSize)
  xPos += gSize

  if (xPos>width){
    xPos=0
    yPos += gSize
  }
*/

function draw() {

  //created a rectangle
  fill(15)
  noStroke()
  rect(xPos, yPos, 400)

  //make a random choice
  let choice = random(0, 1);
  strokeWeight(5);
  stroke(xPos, yPos, 50)
  



  if (choice > 0.5) {
    line(xPos, yPos, xPos + gSize, yPos + gSize)
    noStroke()
    fill(xPos, yPos, 150)
    ellipse(xPos, yPos, 20)
    fill(15)
    ellipse(xPos, yPos, 8)

  } else {
    line(xPos + gSize, yPos, xPos, yPos + gSize)
  }
  //moving the grid position 
  xPos += gSize

  if (xPos > width) {
    xPos = 0
    yPos += gSize
  }

}


