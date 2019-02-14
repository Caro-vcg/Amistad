var a;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  rect1();

  if (mouseIsPressed) {
    a = int(random(1,7));
  }

  if (a == 1) {
    dado1();
  }

  if (a == 2) {
    dado2();
  }

  if (a == 3) {
    dado3();
  }

  if (a == 4) {
    dado4();
  }

  if (a == 5) {
    dado5();
  }

  if (a == 6) {
    dado6();
  }
  console.log(a);
}

function rect1(R, G, B, tam) {
  fill(190);
  rect(25, 25, 350, 350, 10);
}

function dado1() {
  fill(0);
  ellipse(200, 200, 60, 60);
}

function dado2() {
  fill(0);
  ellipse(100, 100, 60, 60);
  ellipse(300, 300, 60, 60);
}


function dado3() {
  fill(0);
  dado1();
  dado2();
}

function dado4() {
  dado2();
  fill(0);
  ellipse(300, 100, 60, 60);
  ellipse(100, 300, 60, 60);
}

function dado5(){
 dado1();
  dado4();
}

function dado6(){
  dado4();
  ellipse(100,200,60,60);
  ellipse(300,200,60,60);
}
