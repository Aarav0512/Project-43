var h,m,s 
var hAngle,mAngle,sAngle


function setup() {
  createCanvas(400,400);
 angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  h = hour()
  m = minute()
  s = second()
  sAngle = map(s,0,60,0,360)
  mAngle = map(m,0,60,0,360)
  hAngle = map(h%12,0,12,0,360)
  text(h+":"+m+":"+s,300,20)
  noFill()
  strokeWeight(5)
  stroke("blue")
  arc(0,0,200,200,0,sAngle)
  stroke("green")
  arc(0,0,180,180,0,mAngle)
  stroke("red")
  arc(0,0,160,160,0,hAngle)
  
  push()
  stroke("blue")
  rotate(sAngle)
  line(0,0,75,0)
  pop()

  push()
  stroke("green")
  rotate(mAngle)
  line(0,0,65,0)
  pop()

  push()
  stroke("red")
  rotate(hAngle)
  line(0,0,50,0)
  pop()
}