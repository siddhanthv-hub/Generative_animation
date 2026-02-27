
//scene variables
let bgs = [];
let fgs =[];
let count =0;


function preload() {
  for(let i=0; i<5; i+=1 ){
    fgs[i] = loadImage("./assets/fg"+i+".png");
    bgs[i] = loadImage("./assets/bg"+i+".png");
  }
 

}

function setup() {
  createCanvas(1600, 900);
  imageMode(CENTER);
}

function draw() {
  push();
  background(220);
  translate(width/2, height/2);
  let scaleValue4 = map(count, 0, 1800,1,2,true);
  scale(scaleValue4);
  image(fgs[4],0,0,width,height);
  let scaleValue3 = map(count, 0, 1200,1,2,true);
  scale(scaleValue3);
  image(fgs[3],0,0,width,height);
  let scaleValue2 = map(count, 0, 600,1,2,true);
  scale(scaleValue2);
  image(fgs[2],0,0,width,height);
  let scaleValue0 = map(count, 0, 240,1,2,true);
  scale(scaleValue0);
  image(fgs[0],0,0,width,height);
  pop();



  // if(keyIsDown(38)) {
    count+=2;
  // }
  console.log(count);
}