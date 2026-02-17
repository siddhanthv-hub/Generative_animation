let X;
let Y;
function setup() {
  createCanvas(400,400);
  X = 0
  Y = 400
}

function draw() {
  background(11,133,163);
  fill(56,56,56)
  noStroke();
  rect(110,125,180,75,25,25,20,20)  //hairR x,y,w,h,roundness
  fill(232,191,146)
  rect(105,200,40,42,10,0,0,50)  //  earL x,y,w,h,roundness
  rect(255,200,40,42,0,10,50,0)  // earR x,y,w,h,roundness
  fill(56,56,56)
  rect(125,150,150,155,20,20,34,34)  //beard layer x,y,w,h, roundness
  triangle(142,297,258,297,200,315)  //chin x,y,x,y,x,y
  noStroke();
  fill(232,191,146)
  rect(129,150,142,140,20,20,50,50)  //face x,y,w,h,roundness
  fill(56,56,56)
  rect(160,258,80,40,8,8,0,0)  //moustache layer  x,y,w,h,m roundness
  fill(232,191,146)
  ellipse(200,275,82,23)  //mouth clean layer  x,y,w,h,m roundness
  fill(232,191,146)
  triangle(163,280,237,280,200,295)  // chin hair clean area
  fill(56,56,56)
  noStroke();
  rect(125,100,160,60,20,50,0,50)  //HairL x,y,w,h,roundness
  fill(56,56,56)  
  rect(145+mouseX/400,180+mouseY/200,40,10,20) //eyebrow x,y,w,h
  rect(215+mouseX/400,180+mouseY/200,40,10,20)  //eyebrow x,y,w,h
  fill(255)
  rect(150,210,30,15)  //eye R x,y,w,h
  rect(220,210,30,15)  //eye L x,y,w,h
  fill(0,0,0)
  ellipse(150+mouseX/60,215+mouseY/100,10,10) //eyeball R x,y,w,h
  ellipse(220+mouseX/60,215+mouseY/100,10,10)   //eyeball L x,y,w,h
  noFill();
  strokeWeight(6)
  stroke(mouseX,mouseY,120)
  
  rect(140+mouseX/300,203+mouseY/200,48,35,5,5,20,20)  //specs R x,y, w,h roundness
  rect(210+mouseX/300,203+mouseY/200,48,35,5,5,20,20)  //specs L x,y.w.h, roundness
  noStroke();
  fill(153,124,93)
  rect(185,238,30,15,50,50,5,5)  // Nose x,y,w,h.roundness
  strokeWeight(6)
  stroke(0,0,0)
  noFill()
  arc(200,270,50,15,0,PI)  //lip line 
}