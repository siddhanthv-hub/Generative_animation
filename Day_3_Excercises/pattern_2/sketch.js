let gSize = 60


function setup() {
  createCanvas(innerWidth, innerHeight);
  background(15);
}

function draw() {

  for (let x = 0; x < innerWidth; x += gSize) {
    for (let y = 0; y < innerHeight; y += gSize){
      noStroke()
    fill(random(255), random(255), random(255));
    rect(x, y, 30, 30)
    fill(x,y,150)
    rect(x+30,y-30,30,30)
    
  }
  }
}