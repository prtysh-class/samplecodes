col = 0;
var carsX = [];
var carsY = [];

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(col);
  stroke(255);
  noFill();
  // if(mouseIsPressed){
    carsX.push(mouseX);   
    carsY.push(mouseY);
  // }
  if(carsX.length > 10){
    carsX.shift();
    carsY.shift();
     }
  console.log(winMouseX);
  
  for( i = 0; i < carsX.length; i++){
    circle(carsX[i],carsY[i],10);
  }
}



