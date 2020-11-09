let bubblesToDisplay = document.getElementById("bubblesToDisplay").value;
const triggerBtn = document.getElementById("triggerBtn");

triggerBtn.onclick = () => {
  bubblesToDisplay = document.getElementById("bubblesToDisplay").value;
  bubbles = [];
  setup();
};

let bubbles = [];
let score = 0;
let scoreDisplay = `Score: ${score}`;
function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < bubblesToDisplay; i++) {
    let newBubble = new Bubble(random(600), random(400), random(20, 70));
    bubbles.push(newBubble);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      let newBubble = new Bubble(random(600), random(400), random(20, 70));
      bubbles.push(newBubble);
      score += 1;
      scoreDisplay = `Score: ${score}`;
      text(scoreDisplay, 10, 10);
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].hoverEffect();
    } else {
      bubbles[i].g = 0;
    }
    bubbles[i].show();
  }
  fill(255, 0, 0);
  text(scoreDisplay, 10, 10);
}

class Bubble {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.radius = this.diameter / 2;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  show() {
    stroke(255);
    strokeWeight(5);
    if (this.r === 0 && this.g === 0 && this.b === 0) {
      noFill();
    } else {
      fill(this.r, this.g, this.b);
    }
    ellipse(this.x, this.y, this.diameter);
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  contains(x, y) {
    let tempDist = dist(this.x, this.y, x, y);
    return tempDist <= this.radius;
  }
  hoverEffect() {
    this.g = 255;
  }
}
