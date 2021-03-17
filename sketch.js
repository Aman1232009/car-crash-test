var wall;
var car,carSpeed,carWeight;
function setup() {
  createCanvas(1600,400);
  carSpeed = random(55,90);
  carWeight = random(400,1500)
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX=carSpeed;

  wall = createSprite(1000, 200, 20, height/2);
  wall.shapeColor = "grey";
}

function draw() {
  background(0);  
  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
   car.velocityX=0;
   var deformation=0.5 * carWeight * carSpeed* carSpeed/22500;
   if(deformation>180 && deformation>100)
   {
     car.shapeColor = "red";
   }

   if(deformation<180 && deformation>100)
   {
     car.shapeColor = "green";
   }

   if(deformation<100)
   {
     car.shapeColor = "blue";
   }
  }
  drawSprites();
}