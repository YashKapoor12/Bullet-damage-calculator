var bullet,wallWidth,wall,speed,weight,damage;
function setup() {
  createCanvas(800,400);

  speed=223;
  weight=32;

  bullet=createSprite(200, 200, 70, 10);
  bullet.shapeColor=color(250,150,100);
  bullet.velocityX=speed;

  wallWidth=random(40,70);
  wall=createSprite(700,200,wallWidth,200);
  wall.shapeColor="yellow";

}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    damage=0.5*speed*speed*weight/wallWidth*wallWidth*wallWidth;
  }
  if(wallWidth>50){
    wall.shapeColor="green";
  }
  else if(wallWidth<50){
    wall.shapeColor="red";
  }
  drawSprites();
}