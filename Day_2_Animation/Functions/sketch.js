
function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke()
  
  
}
/*
function drawHouse(x,y) {
  
  rect(x,y,100,80)  //x was 200 y waqs 200
  triangle(x,y,x+50,y-50,x+100,y)
}
*/
 
function drawBox (x,y,r,g,b) {
  fill(r,g,b)
  rect(x,y,50,50)
}


function mousePressed() {
  drawBox(mouseX,mouseY,50,200,58)
  
}

function mouseDragged() {
  drawBox(mouseX, mouseY,     )
}