let ySpeed = 8;
let yPos = 40;
let xPos = 40;
let xSpeed = 8;
let circleColour;
let mySound;

function preload() {
  soundFormats("mp3")
  mySound = loadSound("./sounds/3.mp3")
  

}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(220);
}

function draw() {
  

  noStroke();
  
  ellipse(xPos, yPos, 50)
  yPos += ySpeed
  xPos += xSpeed

  //if touches the bottom change direction
  if (yPos > height - 25 || yPos < 25) {
    ySpeed = -ySpeed
    changeColour(circleColour);
    mySound.play();
    
  }

  if (xPos > width - 25 || xPos < 25) {
    xSpeed = -xSpeed
    changeColour(circleColour);
     mySound.play();
    
  }
  function changeColour(){
    
    circleColour=fill(random(255), random(255), random(255))
  }



  

  //if touches the outer width the sound should come


}


