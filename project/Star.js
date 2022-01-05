// This is a function that makes the star objects
function Star() {
	this.x = random(-width, width);
	this.y = random(-height, height);
	this.a = random(width);
	this.pa = this.a;
  
    // This function updates the star objects
	this.update = function() {
	  this.a = this.a - speed;
      // This 'if' statement states that if the width or the radius of the star object is less than 1, it will update and draw out the star object around the center of the canvas
	  if (this.a < 1) {
        // It draws out the random position around the center of the canvas
		this.x = random(-width, width);
		this.y = random(-height, height);
        this.a = width;
		this.pa = this.a;
	  }
	}
  
    // The function draws out the 
	this.render = function() {
      // It fills the color of the star object
	  fill(255);
      // It removes the stroke from the star object
	  noStroke();
  
      // It maps out and draws the starting position and the width of the star object between 0 and 1
	  var sx = map(this.x / this.a, 0, 1, 0, width);
      // It maps out and draws the starting position and the height of the star object between 0 and 1
	  var sy = map(this.y / this.a, 0, 1, 0, height);
  
      // It maps out and increases the radius or the width of the star object, therefore makes it bigger when it moves away from the center of the canvas
	  var r = map(this.a, 0, width, 10, 0);
      // This draws the main star object
	  ellipse(sx, sy, r, r);
  
      // It maps out and draws the starting position and the width of the streak line between 0 and 1
	  var px = map(this.x / this.pa, 0, 1, 0, width);
      // It maps out and draws the starting position and the width of the streak line between 0 and 1
	  var py = map(this.y / this.pa, 0, 1, 0, height);
  
      // This initialises the speed of the star object
	  this.pa = this.a;
  
      // It draws the streaks that come from the star object when the speed increases
	  stroke(255);
	  line(px, py, sx, sy);
  
	}
  }