function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  for (var y = 5; y < 500; y = y + 10) {
    for (var x = 5; x < 500; x = x + 10) {
      fill(80, 150, 200);
      ellipse(x, y, 10, 10);
    }
  }
}
