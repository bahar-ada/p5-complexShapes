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
  beginShape()
  vertex(60,60)
  vertex(300,100)
  vertex(400,450)
  vertex(100,500)
  vertex(500,60)
  vertex(60,200)
  vertex(200,200)

  endShape("close")
}
