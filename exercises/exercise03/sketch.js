let arrow;
let speed;

function setup() {
    createCanvas(800, 500);
    background(180);

    speed = 5
    this.rotation = 60;

    arrow = new Arrow(width/2, height/2, 0, 0, 20, 230, 90, 80);

    arrow.vx = speed*cos(this.rotation * PI/100);
    arrow.vy = speed*sin(this.rotation * PI/100);
}

function draw() {
    background(180);
    arrow.drawArrow();
    arrow.moveArrow();
}