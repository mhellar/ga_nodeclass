var viz_function = function(p) {
  p.setup = function() {
    
    myCanvas.parent('viz2')
    p.noStroke()
    p.noLoop()
  }

  p.draw = function() {
    p.background(255,255,255)
    p.fill(0,255,0)
    p.ellipse(p.mouseX,p.mouseY,20,20)
  }

	p.mouseMoved = function() {
		p.redraw()
	}
}
var viz = new p5(viz_function)

// (May 2015: ported to p5.js by Jerome Herr)
// Sep 2009
// http://www.abandonedart.org
// http://www.zenbullets.com
//
// This work is licensed under a Creative Commons 3.0 License.
// (Attribution - NonCommerical - ShareAlike)
// http://creativecommons.org/licenses/by-nc-sa/3.0/
// 
// This basically means, you are free to use it as long as you:
// 1. give http://www.zenbullets.com a credit
// 2. don't use it for commercial gain
// 3. share anything you create with it in the same way I have
//
// These conditions can be waived if you want to do something groovy with it 
// though, so feel free to email me via http://www.zenbullets.com
var viz_function = function(p) {
  p.setup = function() {
  var myCanvas = p.createCanvas(800,600)
  myCanvas.parent('viz2')
  frameRate(12);
  smooth();
  background(255);
  drawGrid();
  }



var xoff = 0; 
var yoff = 0;
var driftXN = 0; 
var driftYN = 0; 

function draw() {
  background(255);
  driftXN += 0.001;
  driftYN += 0.02;
  xoff += (noise(driftXN) * 0.03) - 0.03;
  yoff -= (noise(driftXN) * 0.05);
  drawGrid();
}

function drawGrid() {
  push();
  translate(width/2,150);
  noFill();
  strokeWeight(0.8);
  var xnoise = xoff;
  var ynoise = yoff;
  var stro = 0;
  for (var y = -200; y <= 200; y+=0.5) {
    stroke(stro, (y+140)/2, stro, 40);
    for (var x = -200; x <= 230; x+=80) {
      var offset = (noise(xnoise,ynoise) * 40) -20;
      var rad = noise(xnoise,ynoise) * 50;
      ellipse(x, y+offset, rad *2, rad);
      xnoise += 0.1;
    }
    stro += 250;
    if (stro > 255) { stro = 0; }
    xnoise = xoff;
    ynoise += 0.005;
  }
  pop();
}