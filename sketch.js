
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var protractorimg, protractor
function preload(){
}

function setup() {
	createCanvas(800, 400);

 
engine = Engine.create();
	world = engine.world;


bob1=new Bob(300,350,50, "red");

bob2=new Bob(350,350,50, "orange");

bob3=new Bob(400,350,50, "yellow");

bob4=new Bob(450,350,50, "green");

bob5=new Bob(500,350,50, "blue");

bob6=new Bob(550,350,50, "purple");
  ground1 = new roof(450,100,325,40);

  sling1= new Suspender(bob1.body,ground1.body,-50*2,0);
  sling2= new Suspender(bob2.body,ground1.body,-25*2,0);
  sling3= new Suspender(bob3.body,ground1.body,-0*2,0);
  sling4= new Suspender(bob4.body,ground1.body,25*2,0);
  sling5= new Suspender(bob5.body,ground1.body,50*2,0);
  sling6= new Suspender(bob6.body,ground1.body,75*2,0);
	Engine.run(engine);
  
}


function draw() {
  background(100);
  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();

  drawSprites ();
}



	function keyPressed(){
		if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -100,y: -60});
		}
	  }

