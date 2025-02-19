function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  stroke(0)

  // beginShape()
  // vertex(60,60)
  // vertex(300,100)
  // vertex(400,450)
  // vertex(100,500)
  // vertex(60,200)
  // vertex(200,200)
  // endShape("close")
  
fill(137, 168, 178)
  // beginShape()
  // vertex(60,60)
  // vertex(300,100)
  // vertex(400,450)
  // vertex(100,500)
  // vertex(500,60)
  // vertex(60,200)
  // vertex(200,200)

  // endShape("close")

  beginShape()
  curveVertex(60,60)
  curveVertex(10,200)
  curveVertex(300,60)
  curveVertex(500,500)
  curveVertex(400,300)
  curveVertex(200,100)
  curveVertex(60,60)
  curveVertex(10,200)
  curveVertex(170,200)
  endShape()
}
