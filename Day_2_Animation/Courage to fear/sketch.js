 let x;
 let y;
 let a;
 let bgColor;
function setup() {
  createCanvas(600, 600);
  bgColor= color(179,62,62);
  background(bgColor);
  noStroke()
  
  x=0
  y=600
  a=0
}


 // main scene

function draw() {
  
  
  //cloud 1 from Left to Right
  fill(217,106,91)
  rect(100+x,300,80,25,50)
  ellipse(145+x,300,40,40,) 
  
  
  
  //cloud 2 
  fill(252,156,126)
  noStroke()
  rect(300+x,150,150,45,50)
  ellipse(370+x,155,80,80)
 
  //cloud 3 
  fill(217,106,91)
  noStroke()
  rect(450+x,250,90,30,50)
  ellipse(495+x,250,50,50)
  
  
  //mountain left 
    fill(49,53,71)
  triangle(100,400,250,380,175,480)  //rock
  quad(0,400,160,410,60,600,0,600)
  fill(235,235,235)
  triangle(0,380,250,380,0,425) //surface
  
  //mountain right
  fill(49,53,71)
  triangle(400,380,515,390,450,475)  //rock
  quad(460,380,600,380,600,500,500,575)
  quad(550,500,600,500,600,600,550,600)
  fill(235,235,235)
  triangle(400,380,600,380,600,420)  //surface

  
  //sphere
  fill(255,214,69)
  ellipse(200+a,369,30,30)
}

function mousePressed(){
  drawPoop(mouseX,mouseY)
  bgColor = color(random(255), random(255), random(255))
}

 // poop draw
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



