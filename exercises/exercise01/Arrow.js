//Arrow class
class Arrow {
	constructor(x, y, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
        this.dx = 0;
        this.dy = 0;
		//rotation of arrow
		this.rotation = rotation;
	}
	//function to draw the arrow
	drawArrow() {
		//translate from the top left corner to x and y of object
        push();
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(this.rotation);
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
		pop();
	}

    updateValues() {
        this.dx = this.x - mouseX;
        this.dy = this.y - mouseY;
        this.rotation = atan2(this.dy, this.dx)
    }
    
}