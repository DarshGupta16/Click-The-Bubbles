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
}
