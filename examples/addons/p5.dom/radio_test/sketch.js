var radio;

function setup() {
  radio = createRadio(); // or create dropdown?

  // just mucking around
  radio.option('apple','1');
  radio.option('orange','2');
  radio.option('pear');

  // Set what it starts as
  radio.value('2');

  radio.changed(mySelectEvent);
}

function draw() {
  background(0);
  if (radio.value() === '1') {
    background(255, 0, 0);
  }
}

function mySelectEvent() {
  var selected = this.value();
  if (selected === 'pear') {
    console.log("it's a pear!");
  }
}

