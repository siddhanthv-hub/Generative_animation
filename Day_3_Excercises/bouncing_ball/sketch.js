let ySpeed = 10;
let yPos = 40;
let xPos = 40;
let xSpeed = 10;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);

  /*
  fill(125)
  ellipse(width / 2, yPos, 50)
  yPos = yPos + ySpeed  //yPos += ySpeed

  // if ball touches the bottom
  if (yPos > height) {
    ySpeed = -10
  } else if (yPos < 0) {
    ySpeed = 10
  }
  
  */
  /*
  fill(125)
  ellipse(width / 2, yPos, 50)
  yPos = yPos + ySpeed  //yPos += ySpeed

  // if ball touches the bottom
  if (yPos > height || yPos < 25) {
    ySpeed = -ySpeed
  }
  */
  
   fill(120)
   ellipse(xPos,yPos,50)
   yPos += ySpeed
   xPos += xSpeed

   //if touches the bottom change direction
    if (yPos>height-25 || yPos<25){
      ySpeed =-ySpeed
    }

    if (xPos>width-25 || xPos<25){
      xSpeed = -xSpeed
    }

}



