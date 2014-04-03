
// Keyboard input
// Draw a rectangle when any key is pressed

function setup() {
  createCanvas(600, 600);
  smooth();
  strokeWeight(8);

  var v = new PVector(0,1);
  println(v.heading());

  angleMode(DEGREES);
  println(v.heading());

  angleMode(RADIANS);
  println(v.heading());

}

function draw() {
  background(204);
  

  noLoop();

}