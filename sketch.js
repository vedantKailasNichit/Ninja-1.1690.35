var ninja;
var ground;
var block;
var block1;
var block2;
var gravity = 7, jump = 12;

function setup() {
  var canvas = createCanvas(800, 600);

  ninja = createSprite(100,400,50,80);
  ninja.shapeColor = "yellow";
  ninja.velocityY = 5;
  ground = createSprite(400,600,canvas.width,50);
  block = createSprite(500,500,200,50);
  block1 = createSprite(200,400,200,50);
  block2 = createSprite(500,300,200,50);

}

function draw() {
  background(0);  


  collide(ninja,block);
  collide(ninja,block1);
  collide(ninja,block2);
  collide(ninja,ground);
  
  move(ninja);
  drawSprites();
}

function collide(ninja,block){
  if(ninja.isTouching(block)){
    ninja.velocityY = 0;
    ninja.collide(block);

    if(ninja.y - block.y < ninja.height/2 + block.height/2 &&
      block.y - ninja.y < ninja.height/2 + block.height/2){
      ninja.velocityY = ninja.velocityY + 0.8;
    }

    if(keyDown(UP_ARROW)){
      ninja.velocityY = -20;
    }
    
  }
  else{
    ninja.velocityY = ninja.velocityY + 0.8;
  }
  
}

