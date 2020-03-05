var gridSize = 20;
var g = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  fill(255);
  for(var y = 0; y < 400;y = y +20){
    for(var x = 0; x < 400; x = x + 20){
      fill(random(255));
      rect(x,y,20,20);
    }
  } 
}