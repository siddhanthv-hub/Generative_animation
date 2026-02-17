function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke()
}

function drawPoop(x,y) {
  
  // back poop 
  fill(77, 65, 45)
  rect(x,y,90,30,50)
  rect(x+15,y-18,65,30,50)
  rect(x+30,y-30,38,30,50)
  triangle(x+42,y-30,x+45,y-45,x+60,y-25)
  
  // front poop
  
  fill(102,90,44)
  rect(x+10,y,80,24,50)
  rect(x+22,y-18,58,30,50)
  rect(x+36,y-30,32,30,50)
  triangle(x+42,y-30,x+45,y-45,x+60,y-25)
  fill(207, 176, 124)
  rect(x+65,y-12,10,10,50)
}

function mousePressed(){
  drawPoop(mouseX,mouseY)
  shapeAngle = random(0, 360)
}