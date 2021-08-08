
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var ball_options={
		isStatic : false,
		restitution : 0.3 ,
		friction : 0,
		density : 1.2
	}
	ball=Matter.Bodies.circle(30,370,50,ball_options);
	World.add(world,ball);
	ground=Matter.Bodies.rectangle(width/2,370,width,20);
	World.add(world,ground);
	rightSide=Matter.Bodies.rectangle(350,370,20,120);
	World.add(world,rightSide);
	leftSide=Matter.Bodies.rectangle(250,370,20,120);
	World.add(world,leftSide);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,10);
  
  keyPressed();
  ball.show();
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.run(engine);
  ball.display();
  ground.display();
  leftSide.display();
  rightSide.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(ball,{x:0.5,y:0},{x:0.5,y:0});
	}
}

