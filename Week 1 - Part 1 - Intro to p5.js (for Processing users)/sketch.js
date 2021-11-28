// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);

  // Fill in the background
  background('Black');
}

// ------------------------------------------------------------------
// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('Black');
}

// ------------------------------------------------------------------
// Main render loop - code placed in draw() will repeat over and over
function draw() {

  noFill();
  stroke(255, 128);
  
  // let diameter = map(mouseX, 0, width, 5, 50);

  let diameter = dist(mouseX, mouseY, pmouseX, pmouseY);

  // Draw a circle
  circle(mouseX, mouseY, diameter);
}
