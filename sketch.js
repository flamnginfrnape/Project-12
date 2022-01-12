var path ,pathpic
var surfer ,surfer_running
var edge1 ,edge2

function preload(){
  //pre-load images
pathpic = loadImage("path.png")
surfer_running = loadAnimation("Runner-1.png" , "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,200,200);
  path.addImage("pathimage" ,pathpic)
  path.velocityY = 4
  surfer = createSprite(200,350,50,100,)
  surfer.addAnimation("running" ,surfer_running)
  surfer.scale = 0.08
  edge1 = createSprite(30,300,60,200)
  edge1.visible = false
  edge2 = createSprite(370,300,60,200)
  edge2.visible = false
  
}

function draw() {
  background(0);
 if (path.y>=400) {
   path.y=path.width/2
 }
 surfer.x= World.mouseX
 surfer.collide(edge1)
  surfer.collide(edge2)
  drawSprites();

}
