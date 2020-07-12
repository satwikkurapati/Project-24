var paper, dustBin
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(10,20,angle,circ);
	ground=new Ground(600,height,1200,20);
	dustBin.add(dustBinLeftSprite,dustBinLeftBody,dustBinBase,dustBinBottomBody,dustBinRightSprite,dustBinRightBody);
	paper.collide(left,right,bottom);
	paper.collide(ground);
	//Create the Bodies Here.

	dustBinleftSprite=createSprite(dustBinPosition, dustBinY, 20,100);
 	dustBinleftSprite.shapeColor=color(255,0,0);

 	dustBinLeftBody = Bodies.rectangle(dustBinPosition+20, dustBinY, 20,100 , {isStatic:true} );
 	World.add(world, dustBinLeftBody);

 	dustBinBase=createSprite(dustBinPosition+100, dustBinY+40, 200,20);
 	dustBinBase.shapeColor=color(255,0,0);

 	dustBinBottomBody = Bodies.rectangle(dustBinPosition+100, dustBinY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, dustBinBottomBody);

 	dustBinRightSprite=createSprite(dustBinPosition+200 , dustBinY, 20,100);
 	dustBinRightSprite.shapeColor=color(255,0,0);

 	dustBinRightBody = Bodies.rectangle(dustBinPosition+200-20 , dustBinY, 20,100 , {isStatic:true} );
 	World.add(world, dustBinRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  left.display();
  right.display();
  bottom.display();
  drawSprites(); 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.body.applyForce(paperObject.body,paperObject.body.position(x=85,y=-85));
	}
}



