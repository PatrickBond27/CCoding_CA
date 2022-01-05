let arrow, dx, dy, angle;

function setup() {
    createCanvas(800, 500);
    background(180);
    arrow = new Arrow(width/2, height/2);
}

function draw() {
    background(180);
    arrow.updateValues();
    arrow.drawArrow();
}