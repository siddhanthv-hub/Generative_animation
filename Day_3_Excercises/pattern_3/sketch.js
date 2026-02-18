let gSize = 60;
xPos=0;
yPos=0;


function setup() {
  createCanvas(innerWidth, innerHeight);
  background(15);
}

function draw() {

  for (let x = 0; x < innerWidth; x += gSize) {
    for (let y = 0; y < innerHeight; y += gSize) {
      noStroke()
      fill(random(255), random(255), random(255));
      ellipse(x, y, 30, 30)
      
      let choice = random(0, 1);
  strokeWeight(10);
  stroke(random(255), random(255), random(255))

  if (choice>0.5) {
    line(xPos,yPos,xPos+gSize,yPos+gSize)
  } else{
    line(xPos+gSize,yPos,xPos,yPos+gSize)
  }

   //moving the grid position
   xPos+=gSize
   if (xPos > width) {
    xPos = 0
    yPos += gSize
  }

    }
  }
  
}