
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


var randConst = 100000;
var seed = Math.ceil(Math.random() * randConst);

var randomSeed = function(nseed) {
  //the seed will be a positive (non-zero) number
  seed = Math.ceil(Math.abs(nseed));
}

var sinrandom = function (min, max) {
  var tmp;
  var rand  = Math.sin(seed++) * randConst;
  rand -= Math.floor(rand);

  if (arguments.length === 0) {
    return rand;
  } else if (arguments.length === 1) {
    return rand * min;
  } else {
    if (min > max) {
      tmp = min;
      min = max;
      max = tmp;
    }
    return rand * (max-min) + min;
  }
}

// Linear Congruential Generator
// Variant of a Lehman Generator 
var lcg = (function() {
  // Values taken from Donald Knuth (http://en.wikipedia.org/wiki/Linear_congruential_generator)
  var m = 18446744073709551616,
      a = 6364136223846793005,
      c = 1442695040888963407,
      // Seeding
      seed, z;
  return {
    setSeed : function(val) {
      z = seed = val || Math.round(Math.random() * m);
    },
    getSeed : function() {
      return seed;
    },
    rand : function() {
      // define the recurrence relationship
      z = (a * z + c) % m;
      // return a float in [0, 1) 
      return z / m;
    }
  };
}());
 
