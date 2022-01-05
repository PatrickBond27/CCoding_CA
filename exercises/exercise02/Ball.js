//Arrow class
class Ball {
	constructor(x, y, vx, vy, radius, r, g, b) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = r;
		this.g = g;
		this.b = b;
	}
	//function to draw the arrow
	drawBall() {
		//translate from the top left corner to x and y of object
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
	}

	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}