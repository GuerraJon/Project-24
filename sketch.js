const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,b1,b2,b2;
var ground;


function preload()
{

}

function setup() {
	createCanvas(600, 200);

	var options={
		isStatic:false,
		restitution:0.3,
		friction: 0.5,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= Bodies.circle(200,150,50,options);
	World.add(world,paper);
	paper.shapecolor=color(255,255,255);

	b1 = createSprite(400,165,10,70);

	b2 = createSprite(480,195,150,10);

	b3 = createSprite(560,165,10,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

