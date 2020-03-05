var x = 8;
function setup(){
  if(x <= 0){
    print("x is less than zero");
  } else if(x > 0 && x <= 3){
    print("x is between 0 and 3");
  } else if(x > 3 && x <= 6){
    print("x is between 3 and 6");
  } else{
    print("x is larger than 6");
  }
}

function draw(){
}