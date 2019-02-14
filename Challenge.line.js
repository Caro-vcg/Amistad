var x;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  x = 5;
  while (x < 500) {
    fill(random(0,255),random(0,255), 200);
    ellipse(x, 255, 10, 10);
    x = x + 10;
  }

}
