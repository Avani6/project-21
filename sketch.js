// var for the bullet,wall,thinkness,speed and weight 
var wall,thinkness;
var bullet,speed,weight;

function setup() {
  createCanvas(1300,300);
  
  //setting the var speed and weight to be at any point
  speed=random(223,321);
  weight=random(30,52);
  thinkness=random(20,60)
  
  
  // sprites for creating car and the wall
  bullet = createSprite(50, 150, 40, 10);
  bullet.shapeColor=("magenta")
  bullet.velocityX=speed;
  wall = createSprite(1200, 150, thinkness,height/2);
  wall.shapeColor=("yellow")
  
  
}

function draw() {
  background("black");
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed *speed/(thinkness*thinkness*thinkness)
    console.log (damage)
    if(damage>10)
    {
      wall.shapeColor=color("red")
    }
    if(damage<10)
    {
      wall.shapeColor=color("green")
    }
    
  } 

 

 
  drawSprites();
}

function hasCollided(bullet1,wall1)
{
bulletRightEdge = bullet1.x + bullet1.width;
wallLeftEdge=wall1.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}

return false




}
