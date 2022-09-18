var jake, jake_anim
var rua, rua_anim
var bondr, bondl

function preload(){
jake_anim = loadAnimation("Jake1.png","Jake2.png","Jake3.png","jake4.png","Jake5.png")
rua_anim = loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
jake = createSprite(200,200)
jake.addAnimation("run", jake_anim)
rua = createSprite(200,200,400,400)
rua.addImage("rua", rua_anim)
rua.scale = 0.5
jake.scale = 0.5
bondr = createSprite(125,100,20,400)
bondr.visible = false
bondl = createSprite(270,100,20,400)
bondl.visible = false

}

function draw() {
  background("white");
jake.depth = rua.depth + 1
jake.x = World.mouseX

jake.collide(bondr)
jake.collide(bondl)  

if(jake.x < 125){
  jake.x = 150
}

if(jake.x > 270){
  jake.x = 245
}



  drawSprites();
}
