
// Keyboard input
// Draw a rectangle when any key is pressed

var text;

var cycles = 1000000;

var setup = function() {
  text = createHTML("Random tests");
  text.position(10,20);
  createGraphics(10, 10);
}

var draw = function() {

  background(51);

  var now = millis();
  for (var i = 0; i < cycles; i++) {
  	var r = random();
  }
  var passed1 = millis() - now;


  now = millis();
  for (var i = 0; i < cycles; i++) {
  	var r = sinrandom();
  }
  var passed2 = millis() - now;

  now = millis();
  for (var i = 0; i < cycles; i++) {
  	var r = lcg.rand();
  }
  var passed3 = millis() - now;

  var output = "Testing all random() methods " + cycles + " times.<br><br>";
  output    += "random:     " + passed1 + " milliseconds<br>";
  output    += "sin: " + passed2 + " milliseconds<br>";
  output    += "lcg: " + passed3 + " milliseconds<br>";

  text.html(output);
  noLoop();
};