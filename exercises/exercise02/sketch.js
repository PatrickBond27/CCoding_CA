let ball;
let ball2;
let angle;
let angle2;
let speed;

function setup() {
    createCanvas(800, 500);
    background(180);

    speed = 3
    angle = 25;
    angle2 = 47;

    ball = new Ball(width/2, height/2, 0, 0, 20, 230, 90, 80);
    ball2 = new Ball(width/2, height/2, 0, 0, 20, 80, 90, 230);

    ball.vx = speed*cos(angle * PI/100);
    ball.vy = speed*sin(angle * PI/100);
    ball2.vx = speed*cos(angle2 * PI/100);
    ball2.vy = speed*sin(angle2 * PI/100);
}

function draw() {
    background(180);
    ball.drawBall();
    ball.moveBall();
    ball2.drawBall();
    ball2.moveBall();

    if (ball.x > width - ball.radius || ball.x < ball.radius) {
        ball.vx = -ball.vx;
    }
    if (ball.y > height - ball.radius || ball.y < ball.radius) {
        ball.vy = -ball.vy;
    }
    if (ball2.x > width - ball2.radius || ball2.x < ball2.radius) {
        ball2.vx = -ball2.vx;
    }
    if (ball2.y > height - ball2.radius || ball2.y < ball2.radius) {
        ball2.vy = -ball2.vy;
    }
}