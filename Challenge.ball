var x = 200;
var y = 200;
var velx = 4;
var vely = 8;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  mostrar();
  moverX();
  moverY();
  botarX();
  botarY();
  //console.log(x);


 function moverX() {
    x = x + velx
  }

  function botarX() {
 if (x < 25) {
    velx = velx * -1;
  }

  if (x > 375) {
    velx = velx * -1;
  }
  }

function mostrar() {
    fill(80, 150, 200);
    ellipse(x, y, 50, 50);
  }

  function moverY() {
    y = y + vely
  }

  function botarY() {
 if (y < 25) {
    vely = vely * -1;
  }

  if (y > 375) {
    vely = vely * -1;
  }
  }
