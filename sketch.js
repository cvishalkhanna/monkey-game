
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;

  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background("lightgreen")
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.5
  food();
  obstacles();
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score :"+ score,250,50);
  
  stroke("black");;
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime :" + survivalTime,100,50)
  monkey.collide(ground);
  drawSprites(); 
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(400,50,10,10);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(50,150));
    banana.velocityX=-4
    banana.lifetime=100;
    FoodGroup.add(banana);
    banana.scale=0.2
  }
  
}

function obstacles(){
  if(frameCount%200===0){
   obstacle=createSprite(400,350,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4
   obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
    obstacle.scale=0.3
  }
  
}




