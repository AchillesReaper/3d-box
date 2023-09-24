let size = 1.3;
let tailLength = 200;
let catWidth = 100;
let catHeight = 100;
let centerX;
let centerY;

function setup() {
  createCanvas(800, 800);
  noLoop();
  centerX = width / 2;
  centerY = height / 2 + 100 * size;

  while (catWidth > 150) {
    catWidth = catWidth - 150;
  }
  while (catHeight > 150) {
    catHeight = catHeight - 150;
  }
  catWidth = catWidth / 100;
  catHeight = catHeight / 100;
  tailLength = tailLength * catHeight * size;
}

function draw() {
  background(204);
  noFill();
  fill(255, 160, 220);
  let nosePoint = drawNose();
  noFill();
  drawMouth(nosePoint[0], nosePoint[1], 'L');
  drawMouth(nosePoint[0], nosePoint[1], 'R');
  drawEye('L');
  drawEye('R');
  fill(255, 255, 255);
  drawPaw('L');
  drawPaw('R');
  drawHead();
  drawEar('L');
  drawEar('R');
  drawBeard('L');
  drawBeard('R');
  drawBody();
  drawTail();
}

function mousePressed() {
  redraw();
}

function drawTail() {
  let tailStartX = centerX;
  let tailStartY = centerY - 198 * catHeight * size;
  strokeWeight(20 * catWidth * size);
  beginShape();
  vertex(tailStartX, tailStartY);
  let x1 = tailStartX;
  let y1 = tailStartY - 40;
  let x2 = tailStartX + 320 * catWidth * size;
  let x3 = tailStartX - 60 * catWidth * size;
  let y2 = tailStartY - tailLength / 2 * catHeight * size;
  let y3 = tailStartY - tailLength * catHeight * size;
  bezierVertex(x1, y1, x2, y2, x3, y3);
  endShape();
}

function drawBody() {
  arc(centerX, centerY, 380 * catWidth * size, 380 * catHeight * size, radians(230), radians(310));
}

function drawBeard(LR) {
  let Direction;
  if (LR == 'L') {
    Direction = -1;
  } else {
    Direction = 1;
  }
  let sx1 = centerX + 120 * catWidth * Direction * size;
  let sy1 = centerY;
  let ex1 = centerX + 200 * catWidth * Direction * size;
  let ey1 = centerY - 30 * catHeight * size;

  let sx2 = centerX + 130 * catWidth * Direction * size;
  let sy2 = centerY + 20 * catHeight * size;
  let ex2 = centerX + 220 * catWidth * Direction * size;
  let ey2 = centerY + 40 * catHeight * size;

  line(sx1, sy1, ex1, ey1);
  line(sx2, sy2, ex2, ey2);
}

function drawEar(LR) {
  let Direction;
  if (LR == 'L') {
    Direction = -1;
  } else {
    Direction = 1;
  }
  beginShape();
  let startPointX = centerX + 75 * catWidth * Direction * size;
  let startPointY = centerY - 115 * catHeight * size;
  vertex(startPointX, startPointY);
  let x1 = centerX + 180 * catWidth * Direction * size;
  let x2 = centerX + 200 * catWidth * Direction * size;
  let x3 = centerX + 160 * catWidth * Direction * size;
  let y1 = centerY - 180 * catHeight * size;
  let y2 = centerY - 180 * catHeight * size;
  let y3 = centerY - 55 * catHeight * size;
  bezierVertex(x1, y1, x2, y2, x3, y3);
  endShape();
}

function drawHead() {
  noFill();
  arc(centerX, centerY, 350 * catWidth * size, 320 * catHeight * size, QUARTER_PI * 1.39, QUARTER_PI * 2.61);
  arc(centerX, centerY, 380 * catWidth * size, 250 * catHeight * size, QUARTER_PI * 5.5, QUARTER_PI * 6.5);
  arc(centerX, centerY + 30 * catHeight * size, 400 * catWidth * size, 280 * catHeight * size, QUARTER_PI * 7.2, QUARTER_PI * 8.75);
  arc(centerX, centerY + 30 * catHeight * size, 400 * catWidth * size, 280 * catHeight * size, QUARTER_PI * 3.25, QUARTER_PI * 4.8);
}

function drawPaw(LR) {
  let Direction;
  if (LR == 'L') {
    Direction = -1;
  } else {
    Direction = 1;
  }
  let pawX = centerX + 120 * catWidth * Direction * size;
  let pawY = centerY + 120 * catHeight * size;
  ellipse(pawX, pawY, 90 * catWidth * size, 90 * catHeight * size);
  line(pawX - 15 * catWidth * size, pawY + 10 * catHeight * size, pawX - 15 * catWidth * size, pawY + 42 * catHeight * size);
  line(pawX + 15 * catWidth * size, pawY + 10 * catHeight * size, pawX + 15 * catWidth * size, pawY + 42 * catHeight * size);
}

function drawEye(LR) {
  let Direction;
  let adjustment;
  if (LR == 'L') {
    Direction = -1;
    adjustment = 9;
  } else {
    Direction = 1;
    adjustment = 0;
  }
  noFill();
  let POx = centerX + 80 * catWidth * Direction * size;
  let POy = centerY;
  arc(POx, POy, 100 * catWidth * size, 80 * catHeight * size, QUARTER_PI * (4.5 + adjustment), PI + QUARTER_PI * (2.5 + adjustment));
}

function drawMouth(noseEndX, noseEndY, LR) {
  let Direction;
  if (LR == 'L') {
    Direction = -1;
  } else {
    Direction = 1;
  }
  line(noseEndX, noseEndY, noseEndX, noseEndY + 30 * catHeight * size);
  beginShape();
  vertex(noseEndX, noseEndY + 30 * catHeight * size);
  let x1 = noseEndX;
  let y1 = noseEndY + 80 * catHeight * size;
  let x2 = noseEndX + 60 * catWidth * Direction * size;
  let y2 = noseEndY + 80 * catHeight * size;
  let x3 = noseEndX + 60 * catWidth * Direction * size;
  let y3 = noseEndY + 30 * catHeight * size;
  bezierVertex(x1, y1, x2, y2, x3, y3);
  endShape();
}

function drawNose() {
  strokeWeight(3);
  beginShape();
  let startPoint = [];
  startPoint[0] = centerX;
  startPoint[1] = centerY + 40 * catHeight * size;
  vertex(startPoint[0], startPoint[1]);
  let x1 = centerX - 100 * catWidth * size;
  let x2 = centerX + 100 * catWidth * size;
  let x3 = centerX;
  let y1 = centerY - 20 * catHeight * size;
  let y2 = centerY - 20 * catHeight * size;
  let y3 = centerY + 40 * catHeight * size;
  bezierVertex(x1, y1, x2, y2, x3, y3);
  endShape();
  return startPoint;
}
