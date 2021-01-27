const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ballBody



function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(750,height,1500,150)

	box1 = new Box(1200,615,250,15)
	
	box2 = new Box(1325,545,15,150)

	box3 = new Box(1075,545,15,150)
	
	ball = new Paper(200,600,20,20)

	//Create the Bodies Here.
ballBody = Bodies.rectangle(200,500,20,20)
World.add(world,ballBody)

	Engine.run(engine);
  
}


function draw() {
background(0);
Engine.update(engine) // Better use this in function draw so that it updates the engine on repeated basis
  rectMode(CENTER);
 


  ground.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  

 
 
}
function keyPressed(){
	if (keyCode === 38){ // when you are using keycode then use code of that key from ASCII chart
	
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-55}) // I have changed paperobject to ball
	}
}