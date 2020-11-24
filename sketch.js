function setup() {
  createCanvas(800,400);
  fixed = createSprite(100, 200, 50, 50);
  fixed.shapeColor="green";
  fixed.debug=true;
fixed.velocityX=1;

  moving=createSprite(200,200,50,50);
  moving.shapeColor="green";
  moving.debug=true;
  moving.velocityX=-1;

  box=createSprite(300,200,50,50);
  box.shapeColor="yellow";
  box.debug=true;
  //box.velocityY=1

  box1 = createSprite(300,300,100,50);
  box1.shapeColor="yellow";
  box1.debug=true;
  box1.velocityY=-1;

  box2=createSprite(300,100,100,50);
  box2.shapeColor="yellow";
  box2.debug=true;
  box2.velocityY=1;

}

function draw() {
  background("blue");  


//console.log(moving.x-fixed.x);

if(isTouching(box1,box2)){
  box1.shapeColor="red";
  box2.shapeColor="red";
 bounceOff(box1,box2);
}
else{
  box2.shapeColor="yellow";
  box1.shapeColor="yellow";
}

if(isTouching(fixed,moving)){
  fixed.shapeColor="red";
  moving.shapeColor="red";
 bounceOff(fixed,moving);
}
else{
  moving.shapeColor="green";
  fixed.shapeColor="pink";
}
  drawSprites();
}
