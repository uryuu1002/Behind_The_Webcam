var video;
var vScale = 16;

var particles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide();
  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle(random(width), random(height),
  random(-10, 10),random(-10, 10));
  }

}

function draw() {
  video.loadPixels();
  for(var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}
