// This is an empty array of stars objects
var stars = [];
// This is the speed of the stars objects
var speed;

// This is an empty array of wisps objects
var wisps = [];
// This is an empty array of wisps objects
var wisps2 = [];
// This is an empty array of asteroids objects
var asteroids = [];

function setup() {
	// This sets up the functions that were made
	renderWisps();
	renderWisps2();
	renderAsteroids();
	// A background with 800 pixels width and 800 pixels height
	createCanvas(800, 800);
	// A loop that draws out the stars objects which in that case it is 800 stars
	for (var i = 0; i < 800; i++) {
	  stars[i] = new Star();
	}
}

function draw() {
	// This maps out the speed of the object and slightly increases the speed as it goes further away from the center of the canvas
	speed = map(40, 0, width, 0, 80);
	background(0);
	// This updates and draws each individual asteroid object
	asteroids.forEach( asteroid => {
		asteroid.update();
		asteroid.render();
	});

	// It translates the star objects and separates them so they will appear at separate random locations on the canvas
	translate(width / 2, height / 2);
	for (var i = 0; i < stars.length; i++) {
	// This updates the resets the star object
    stars[i].update();
	// This draws out the star object
    stars[i].render();
}

	// This updates and draws each individual wisp object
	wisps.forEach( wisp => {
		wisp.update();
		wisp.render();
	});

	// This updates and draws each individual wisp object
	wisps2.forEach( wisp2 => {
		wisp2.update();
		wisp2.render();
	});
	
}

// A function that renders an object
function renderWisps() {
	// A 'for' loop for the object
	for (let i = 0; i < 20; i++) {
		wisps[i] = new Wisp();
	}
}

function renderWisps2() {
	for (let i = 0; i < 20; i++) {
		wisps2[i] = new Wisp2();
	}
}

function renderAsteroids() {
	for (let i = 0; i < 5; i++) {
		asteroids[i] = new Asteroid();
	}
}