var score1pos, score2pos, ball, player1, player2, vel;
var side, radius, thickness;
var w, h;
var score1, score2, counter;

function setup(){
  createCanvas(400,400);
  w = width/2;
  h = height/2;
  side = 80;
  radius = 10;
  thickness = 5;
  score1= 0;
  score2= 0;
  counter = 0;
  ball = createVector (w,h);
  player1 = createVector(0,h);
  player2 = createVector(w*2, h);
  vel = createVector(random(-1,1), random(-1,1));
  score1pos = createVector(w - side/2, side/2);
  score2pos = createVector(w + side/2, side/2);
}

function draw(){
  background(0);
  noStroke();
  fill(255, 0, 0);
  circle(ball.x, ball.y, radius*2);
  stroke(255);
  strokeWeight(thickness * 2);
  line(player1.x, player1.y - side/2, player1.x, player1.y + side/2);
  line(player2.x, player2.y - side/2, player2.x, player2.y + side/2);
  noStroke();
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text(score1, score1pos.x,score1pos.y );
  text(score2, score2pos.x,score2pos.y );
  ball.add(vel);
  // vel.add(acc);
  checkKey();
  collision();
}

function collision(){
  // floor and roof collision
  if (ball.y - radius <= 0 || ball.y + radius >= h*2) {
    vel.y = -vel.y;
  }
  if (ball.x - radius - thickness <= 0 || ball.x + radius + thickness >= w*2) {
    counter ++ ;
    if (ball.x - radius - thickness <= 0) {
      if ((ball.y >= player1.y - side/2) && (ball.y <= player1.y + 40)) {
        vel.x = - vel.x * (1 + counter/50);
      } else {
        score2++;
        reset();
      }
    } else {
      if ((ball.y >= player2.y - side/2) && (ball.y <= player2.y + side/2)) {
        vel.x = - vel.x * (1 + counter/50);
      } else {
        score1++;
        reset();
      }
    }
  }
}

function checkKey() {
  //player 1
  if (keyIsDown(81)) {
    player1.y--;
  }
  if (keyIsDown(65)) {
    player1.y++;
  }
  //player 2
  if (keyIsDown(79)) {
    player2.y--;
  }
  if (keyIsDown(76)) {
    player2.y++;
  }
}

function reset() {
  ball.x = w;
  ball.y = h;
  vel.x = random(-1, 1);
  vel.y = random(-1, 1);
}