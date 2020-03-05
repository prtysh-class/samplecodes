var num1;
var num2;
var operator;

function setup() {
  createCanvas(400, 20);
  let n1 = createInput('');
  let n2 = createInput('');
  let o = createInput('');
  n1.input(numberEvent1);
  n2.input(numberEvent2);
  o.input(operation);
}

function draw() {
  background(150);
  fill(255); 
  // console.log(num1, "and", num2, "and", operator);
  if(operator == 'a'){
    console.log("adding ", num1 ," and ", num2, " gives ", addition(num1, num2));
  }
  if(operator == 's'){
    console.log("subtracting ", num2 ," from ", num1, " gives ", subtraction(num1, num2));
  }
  if(operator == 'm'){
    console.log("multiplying ", num1 ," and ", num2, " gives ", multiplication(num1, num2));
  }
  if(operator == 'd'){
    console.log("dividing ", num1 ," by ", num2, " gives ", division(num1, num2));
  }
}

function numberEvent1() {
  num1 = Number(this.value());
}
function numberEvent2() {
  num2 = Number(this.value());
}
function operation(){
  operator = this.value();
}
function addition(x, y){
  return x + y;
}
function subtraction(x, y){
  return x - y;
}
function multiplication(x, y){
  return x * y;
}
function division(x, y){
  if (y !=0){
    return x / y;
  } else {
    return "undefined";
  }
}