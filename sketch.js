
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(450,100,450,20);
	
	bob1 = new bob(300,400);
	bob2 = new bob(360,400);
	bob3 = new bob(420,400);
	bob4 = new bob(480,400);
	bob5 = new bob(540,400);

	r1 = new rope (bob1.body,ground.body,-100);
	r2 = new rope (bob2.body,ground.body,-50);
	r3 = new rope (bob3.body,ground.body,0);
	r4 = new rope (bob4.body,ground.body,50);
	r5 = new rope (bob5.body,ground.body,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-60});
	}
}


