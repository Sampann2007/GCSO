var car;
var speed;
var weight;
var car1;
var car2;
var wall;





function setup() {
  createCanvas(800,400);
  car=createSprite(100, 50, 50, 50);
  car1=createSprite(100,150,50,50);
  car2=createSprite(100,250,50,50);
  wall=createSprite(780,200,20,400);
  
  weight=random(400,1500);
  car.velocityX=speed=Math.round(random(55,80));
  car1.velocityX=speed=Math.round(random(55,80));
  car2.velocityX=speed=Math.round(random(55,80));


  //DEFORMATION          // CAR COLOR   
  //LESS THAN 100        GREEN
  //BETWEEN 100 AND 180  YELLOW
  //GREATER THAN 180     RED

  //DEFORMATION=0.5 X SPEED X SPEED X WEIGHT/22500


}

function draw() {
  background("black");  
  
  console.log(speed);
  if(isTouching(car,wall)){
       car.shapeColor="red";
       car.velocityX=0;
       }
       if(isTouching(car1,wall)){
        car1.shapeColor="yellow";
        car1.velocityX=0;
       }
       if(isTouching(car2,wall)){
         car2.shapeColor="green"
         car2.velocityX=0;
       }
       car.depth=wall.depth+1;
       car1.depth=wall.depth+1;
       car2.depth=wall.depth+1;
  
  drawSprites();
}