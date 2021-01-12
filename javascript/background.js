var canvas;

var num = 1000;
var xPositions = new Array(num);
var yPositions = new Array(num);

function setup() {

  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.elt.style.position = "fixed";
  noStroke();

  for (var i = 0; i < xPositions.length; i++) {
    xPositions[i] = random(width);
  }

  for (var j = 0; j < yPositions.length; j++) {
    yPositions[j] = map(j, 0, yPositions.length, 0, height);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (var i = 0; i < xPositions.length; i++) {
    var siz = map(i, 0, xPositions.length, 200, 10);
    fill(map(i,0,xPositions.length,0,60), map(i,0,xPositions.length,0,89),100);
    ellipse(xPositions[i], yPositions[i], siz, siz);
  }


  for (var i = 0; i < xPositions.length; i++) {
    var siz = map(i, 0, xPositions.length, 200, 10);
    xPositions[i] -= map(i, 0, xPositions.length, 1, 10);

    if (xPositions[i] < -siz / 2) {
      xPositions[i] = width + siz / 2;
    }
  }
}
