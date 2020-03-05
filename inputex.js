var name = "";

function setup(){
  let inp = createInput('');
  inp.input(myInputEvent);
}

function draw(){
  print(name);
}

function myInputEvent(){
  name = this.value();
}
