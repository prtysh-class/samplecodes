class Ball {
  constructor(_pos, _vel, _acc, _i) {
    this.pos = _pos;
    this.vel = _vel;
    this.acc = _acc;
    this.i = _i;
  }
  move() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }
  show() {
    circle(this.pos.x, this.pos.y, 20);
  }
  init() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
  }
  wallCollision() {
    if (this.pos.x <= 0 || this.pos.x >= width) {
      this.vel.x *= -1;
    }
    if (this.pos.y <= 0 || this.pos.y >= width) {
      this.vel.y *= -1;
    }
  }
  collision() {   
    for (let j = 0; j < balls.length; j++) {
      if (this.i != j) {
        let a = this.pos.copy();
        let b = balls[j].pos.copy();
        let c = b.sub(a).mag();
        if (c < 10) {
          print("entering the collision");
          let temp = this.vel;
          this.vel = balls[j].vel;
          balls[j].vel = temp;
        }
      }
    }
  }
};

var balls = [];
var num_of_balls = 10;

function setup() {
  createCanvas(400, 400); 
  for (let i = 0; i < num_of_balls; i++) {
    balls.push(new Ball(0, 0, 0, i));
  }
  for (let i = 0; i < num_of_balls; i++) {
    balls[i].init();
  }
}

function draw() {
  background(220);
  for (let i = 0; i < num_of_balls; i++) {
    balls[i].move();
    balls[i].show();
    balls[i].wallCollision();
    balls[i].collision();
  }
}