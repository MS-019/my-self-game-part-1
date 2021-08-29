var PLAY=1
var END =0
var horse,horse_running,rock,coin,gameOver,snake,restart;
var horse_i,rock_i,snake_i,coin_i,gameOver_i,Restart_i;
var bg,bg_i;
var ground;
var score=0;
var rockGroup,coinsGroup;
var snakesGroup;
gameState = PLAY;
var coins=0
var cn;
var invisibleGround;
function preload(){
  
horse_running= loadImage("Horse.gif",horse_i);
  bg_i = loadImage("954759.jpg");
  coin_i = loadImage("coin-clip-art-44.jpg");
  rock_i = loadImage("rock-clipart-transparent-23.png");
  snake_i = loadImage("Snake-Transparent.png");
  gameOver = loadImage("954759.jpg")

  
  
  

  
  
  
}

function setup() {
 createCanvas(600,400);
 
  bg=createSprite(200,200);
  bg.addImage(bg_i);
bg.scale=1.2  
  
   horse = createSprite(70,300,50,50);
  horse.addImage(horse_running);
  horse.scale=0.15; 
   ground=createSprite(200,370,900,30);
  ground.visible=false;
  
  snakesGroup = new Group();
   rockGroup = new Group();
    coinGroup = new Group();

}

function draw() {
  background(155);
  
  
  if(gameState === PLAY){
     bg.velocityX = -3 
    {
       if (bg.x < 10)
       
      bg.x = bg.width/2;
       }
  }
 
  horse.collide(ground);
    horse.velocityY = horse.velocityY + 0.10  
  
  
  if(keyDown("space")&& horse.y >= 150 &&horse.collide(ground)){  
   
      horse.velocityY=-5;
    
    
  
   
  }
  if(snakesGroup.isTouching(horse)){
    gameState=END
  }

  if (rockGroup.isTouching(horse)){
    gameState=END
  }
   snakes();
rocks();
Coins();
  score=score+1
  coin = coins+1

  
  if(gameState===END){
    snakesGroup.setVelocityXEach(0);
     rockGroup.setVelocityXEach(0);
      horse.collide(invisibleGround);

  }
  
 drawSprites();
   
  textSize(20);
  fill("black");
  text("Score: "+score,225,50)
  textSize(30)
  fill("Yellow")
  text("Coins:" + coin,250,100);
}

function snakes(){
  if (frameCount % 400 === 0) {
    snake = createSprite(650,360,40,10);
    snake.addImage(snake_i);
    snake.scale = 0.1;
    snake.velocityX = -6;
    

  snake.lifetime = 200;
    

    
    
    snakesGroup.add(snakes);
}
}
function rocks(){
  if (frameCount % 200 === 0) {
    rock = createSprite(670,350,40,10);
    rock.addImage(rock_i);
  rock.scale = 0.09;
    rock.velocityX = -3;
    
    
  rock.lifetime = 200;
    
    
    
    
    rockGroup.add(rock);
}
}
function Coins(){
  if (frameCount % 100 === 0) {
    coin = createSprite(670,365,40,10);
    coin.addImage(coin_i);
  coin.scale = 0.09;
    if(horse.isTouching(coin)){
      coin=coins+1;
    }
  }
}