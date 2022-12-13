let system;
let img;

function preload() {
  img = loadImage('image2.png');
}

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, height /2 ));
}

function draw() {
  image(img, 0, 0, width, height);
  system.addParticle();
  system.run();
}

