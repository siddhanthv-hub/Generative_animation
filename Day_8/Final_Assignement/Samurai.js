// Spritesheet variables
let sX = 4;
let sY = 1;
let spriteSheet;

//cel variables
let celW, celH;
let cels = [];

//Samurai variables

let samurai = [];
let xSpeed=0;
let isAnimating=false;
let wX=0;
let wY=0;


//scene variables
let bgs = [];
let fgs =[];
let noScenes=5;
let currScene=0;




function preload() {
  for(let i=0; i<noScenes; i+=1 ){
    fgs[i] = loadImage("./assets/fg"+i+".png");
    bgs[i] = loadImage("./assets/bg"+i+".png");
     }
  spriteSheet = loadImage("./assets/samurai.png");

}

function setup() {
  createCanvas(1600, 900);
  wY=0.2*height;
  textAlign(CENTER);

  //calculating the cel width and height
  celW = spriteSheet.width/sX;
  celH = spriteSheet.height/sY;
  //breaking the spritesheet into cels and storing it in an array
  for(let i =0;i<sY;i+=1) {
    for(let j =0;j<sX;j+=1) {
      cels[i*sX + j] = spriteSheet.get(j*celW, i*celH, celW, celH);
    }
  }
}

function draw() {
  background(220);
  //bg
  image(bgs[currScene], 0, 0, width, height);

  //wizard
  if(isAnimating==false){
  image(cels[0], wX, wY,celW/3,celH/3);
  }
  //wizard animation
  if (keyIsPressed){
    wX+=xSpeed;
    if (isAnimating == true){
     image(cels[2], wX, wY,celW/3,celH/3); 
    }
  } 

 

  //foreground
  image(fgs[currScene], 0, 0, width, height);

  

  //changing Scenes
  if (wX>width && currScene<4){
    wX=0; 
    currScene +=1;
    orbY=0;
  }
  if(wX>width && currScene==4) {
    background("Yellow")
    textSize(100)
    text("The End",width/2,height/2)

  }
}
function keyPressed(){
  if(keyCode == RIGHT_ARROW) {
    xSpeed=10;
  }
    else{
    xSpeed=0;
    }
    if(keyCode== 32){
      isAnimating = true
      isAnimating = false;
    }
}
function keyReleased()
 {
  isAnimating = false;
 }