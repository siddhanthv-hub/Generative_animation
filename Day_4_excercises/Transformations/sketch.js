/*let rotateBy = 45
function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES)

}

function draw() {
  background(15);

  //move the origin to the centre
  push();
  translate(width / 2, height / 2)

  for (let d = 0; d < 360; d += rotateBy) {
    
    rotate(rotateBy)
    rect(100, 0, 30)
    ellipse(250, 0, 50)
  }
  pop();
}
*/

let divisions = 20
function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES)

}

function draw() {
  background(15);

  //move the origin to the centre
  push();
  translate(width / 2, height / 2)
  rotate(-frameCount)
  noStroke();

  for (let i = 0; i < divisions; i += 1) {

    rotate(360 / divisions)


    fill(25, 50, 150)
    rect(125, 0, 30 * cos(frameCount))
    fill(235, 119, 52)
    ellipse(300, 0, 50 * sin(frameCount))
    fill(181, 45, 38)
    ellipse(20, 0, 20*sin(frameCount))
    fill(220)
    rect(300,0,80*sin(frameCount))
  }

  rotate(2 * frameCount)

  for (let i = 0; i < 360; i += 1) {

    rotate(360 / divisions)
    fill(235, 119, 120)
    ellipse(200, 0, 50 * sin(frameCount))
    fill(255, 237, 71)
    ellipse(50, 0, 40) 
  }
  pop();
}
