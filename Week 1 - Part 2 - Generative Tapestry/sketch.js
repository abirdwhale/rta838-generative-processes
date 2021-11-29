let grid = 20; // in pixels

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
}

// ------------------------------------------------------------------
// Main render loop - code placed in draw() will repeat over and over
function draw() {

  background('black');

  stroke(255);
  noFill();

  for (let x = 0; x < width; x += grid) {
    for (let y = 0; y < width; y += grid) {

      rect(x, y, grid, grid);

    }
  }

}