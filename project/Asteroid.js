// This makes an asteroid object
class Asteroid {
    constructor() {
        this.posX = Math.round(Math.random()*800);
        this.posY = Math.round(Math.random()*800);
        this.pos = createVector(Math.round(Math.random()*800), Math.round(Math.random()*800));
        this.speed = createVector(Math.round(Math.random()*4 - 2), Math.round(Math.random()*4 - 2));
        this.radius = Math.round(Math.random()*20 + 2);
        this.xSpeed = Math.random()*4 - 2;
        this.ySpeed = Math.random()*4 - 2;
    }

    render() {
        push();
        translate(this.posX, this.posY);
        // This rotates an object a quarter of a PI which is 45 degrees
        rotate(PI/4);
        // It adds a blur effect on the object
        drawingContext.shadowBlur = 32;
        // It adds a color of the blur effect
        drawingContext.shadowColor = color(220, 110, 110);
        // This draws out the asteroid object and adds the color
        fill(20, 40 ,20);
        rect(0, 0, this.radius, this.radius);
        pop();
    }

    // This updates the position of the asteroid objects
    update() {
        // This updates and adds the speed of the x position and the y position
        this.posX = this.posX + this.xSpeed;
        this.posY = this.posY + this.ySpeed;

        // This updates the position of the object whenever it reaches a specific side
        if (this.posX > 800) {
            this.posX = 0;
        }
        if (this.posX < 0) {
            this.posX = 800;
        }
        if (this.posY > 800) {
            this.posY = 0;
        }
        if (this.posY < 0) {
            this.posY = 800;
        }
    }
}