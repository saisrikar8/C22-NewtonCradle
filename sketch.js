const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1,rope2,rope3, rope4, rope5;
var ball1, ball2, ball3, ball4, ball5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	};

	ball_options = {
		restituition: 0.3,
		friction:0.1
	};

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(320, 400, 20, ball_options);
	World.add(world, ball1);

	ball2 = Bodies.circle(360, 400, 20, ball_options);
	World.add(world, ball2);

	ball3 = Bodies.circle(400, 400, 20, ball_options);
	World.add(world, ball3);

	ball4 = Bodies.circle(440, 400, 20, ball_options);
	World.add(world, ball4);

	ball5 = Bodies.circle(480, 400, 20, ball_options);
	World.add(world, ball5);

	rope1 = new rope(ball1, 300, 0.05);
	rope2 = new rope(ball2, 300, 0.05);
	rope3 = new rope(ball3, 300, 0.05);
	rope4 = new rope(ball4, 300, 0.05);
	rope5 = new rope(ball5, 300, 0.05);

	Engine.run(engine);
	
  
}

function draw() {
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  Engine.update(engine);

  //call display() to show ropes here
  rope1.display(ball1.position.x, ball1.position.y);
  rope2.display(ball2.position.x, ball2.position.y);
  rope3.display(ball3.position.x, ball3.position.y);
  rope4.display(ball4.position.x, ball4.position.y);
  rope5.display(ball5.position.x, ball5.position.y);

  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x, ball1.position.y, 20);
  ellipse(ball3.position.x, ball3.position.y, 20);
  ellipse(ball2.position.x, ball2.position.y, 20);
  ellipse(ball4.position.x, ball4.position.y, 20);
  ellipse(ball5.position.x, ball5.position.y, 20);


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(ball1, {x:0, y: 0}, {x: -0.08, y:0});

	}
}