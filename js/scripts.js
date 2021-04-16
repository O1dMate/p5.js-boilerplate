let SCREEN_WIDTH = 0;
let SCREEN_HEIGHT = 0;

// Drawing functions to handled inverted Y-Axis of the browser
const drawRect = (x, y, w, h) => rect(x, SCREEN_HEIGHT-y, w, h);
const drawLine = (x1, y1, x2, y2) => line(x1, SCREEN_HEIGHT-y1, x2, SCREEN_HEIGHT-y2);
const drawCircle = (x, y, d) => circle(x, SCREEN_HEIGHT-y, d);
const drawArc = (x, y, w, h, startAngle, stopAngle) => arc(x, SCREEN_HEIGHT-y, w, h, 2*Math.PI-stopAngle, 2*Math.PI-startAngle);
const drawTri = (x1, y1, x2, y2, x3, y3) => triangle(x1, SCREEN_HEIGHT-y1, x2, SCREEN_HEIGHT-y2, x3, SCREEN_HEIGHT-y3);

// Initial Setup
function setup() {
	SCREEN_WIDTH = window.innerWidth - 20;
	SCREEN_HEIGHT = window.innerHeight - 20

	createCanvas(window.innerWidth-20, window.innerHeight-20);

	frameRate(30);
}

// To be called each frame
function draw() {
	// Draw background & set Rectangle draw mode
	background(255);
	rectMode(CENTER);

	// Draw scene rectangle
	fill(30,30,30);
	stroke(255,255,255);
	drawRect(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_WIDTH, SCREEN_HEIGHT)
}
