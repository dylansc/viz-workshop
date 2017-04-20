function setup() {
createCanvas(640, 480);
}

function draw() {
  const red=random(255);
  const green=random(255);
  const blue=random(255);

  if (mouseIsPressed) {
    fill(0);
  } else {
    // fill(red,green,blue);
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
  stroke(255, 255, 255, 25);
rect(mouseX,mouseY,50,50);
}
