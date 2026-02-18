function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  noStroke()

  /*
  // left 
  if (mouseX < width / 2) {
    fill(120, 120, 300)
    ellipse(mouseX, mouseY, 50)
  }

  else if (mouseX > width / 2)
  fill(120, 225, 200)
  ellipse(mouseX, mouseY, 50)
  */

  if (mouseX < width / 2 && mouseY < height / 2) {
    fill(120, 120, 300)
    ellipse(mouseX, mouseY, 50)
  }

  else if(mouseX>=width/2 && mouseY<height / 2){
     fill(120, 225, 200)
    ellipse(mouseX, mouseY, 50)}
  

  else if(mouseX>=width/2 && mouseY>height / 2){
     fill(120, 50, 100)
    ellipse(mouseX, mouseY, 50)}

  else if(mouseX<=width/2 && mouseY>=height / 2){
     fill(20, 50, 50)
    ellipse(mouseX, mouseY, 50)}
 

}







