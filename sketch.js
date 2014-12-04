var img;

function setup() {
  createCanvas(720, 400);
  img=loadImage("train.jpg");
}
function draw() {
  background(img);
  push();
  translate(width*0.3, height*0.3);
  rotate(frameCount / 60.0);
  star(0, 0, 80, 100, 30); 
  pop();

  push();
  translate(width*0.3+143, height*0.3+17);
  rotate(frameCount / 20);
  star(0, 0, 40, 50, 10); 
  pop();

  push();
  translate(width*0.3+200, height*0.3-40);
  rotate(frameCount / 15);
  star(0, 0, 25, 35, 6); 
  pop();
  
  push();
  translate(width*0.3+225, height*0.3+10);
  rotate(frameCount / 10);
  star(0, 0, 30, 25, 8); 
  pop();


  push();
  translate(width*0.3+350, height*0.3);
  rotate(frameCount / 70.0);
  star(0, 0, 88, 100, 20); 
  pop();

   push();
  translate(width*0.43, height*0.45);
  rotate(frameCount / 10);
  star(0, 0, 15, 20, 6); 
  pop();

  fill(102);
  noStroke();
  ellipse(width*0.3, height*0.3,60,60);
  ellipse(width*0.3+350, height*0.3,50,50);
   var duration = 1000;
   var timing = (new Date()%duration)/duration;

   fill(100,100,255);
    strokeWeight(2);
    rect(width*0.3 + Math.cos(timing*2*PI)*30,
          height*0.3+Math.sin(timing*2*PI)*30,
          350,
          20);
}
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}




