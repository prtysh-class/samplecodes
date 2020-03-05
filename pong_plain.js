var ballX, ballY;
var velX, velY;
var player1, player2;
var score1 = 0,score2 = 0;
var counter = 0;

function setup() {
  createCanvas(400, 400);
  reset();
  player1 = 200;
  player2 = 200;
}

function draw() {
  background(220);
  ballX = ballX + velX;
  ballY = ballY + velY;
  strokeWeight(1);
  circle(ballX, ballY, 20);
  text(score1, 170, 30);
  text(score2, 230, 30);
  collision();
  strokeWeight(10);
  checkKey();
  line(0, player1 - 40, 0, player1 + 40);
  line(400, player2 - 40, 400, player2 + 40);
}

function collision() {
  // print(ballY);
  if (ballY - 10 <= 0 || ballY + 10>= 400) {
    velY = -velY;
  }
  if (ballX - 15<= 0 || ballX + 15 >= 400) {
    counter ++ ;
    if (ballX - 15 <= 0) {
      if ((ballY >= player1 - 40) && (ballY <= player1 + 40)) {
        velX = - velX * (1 + counter/50);
      } else {
        score2++;
        reset();
      }
    } else {
      if ((ballY >= player2 - 40) && (ballY <= player2 + 40)) {
        velX = - velX * (1 + counter/50);
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
    player1--;
  }
  if (keyIsDown(65)) {
    player1++;
  }
  //player 2
  if (keyIsDown(79)) {
    player2--;
  }
  if (keyIsDown(76)) {
    player2++;
  }
}

function reset() {
  ballX = 200;
  ballY = 200;
  velX = random(-1, 1);
  velY = random(-1, 1);
}