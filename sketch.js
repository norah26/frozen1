const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var ground1,ground2

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	
    ground1 = new g1(800,height,1600,20);
    ground2 = new g1(500,500,500,20)
    box1    = new b1(500,465,50,50)
    box2    = new b1(450,465,50,50)
    box3    = new b1(400,465,50,50)
    box4    = new b1(550,465,50,50)
    box5    = new b1(600,465,50,50)
    box6    = new b2(500,415,50,50)
    box7    = new b2(450,415,50,50)
    box8    = new b2(550,415,50,50)
    box9    = new b3(500,365,50,50)
    paper1  = new paper(200,300,50)
    launch = new SlingShot(paper1.body,{x:200, y:300});
}
  



function draw() {
  rectMode(CENTER);
  background("blue");
 Engine.update(engine)


  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  paper1.display();
  launch.display();
}


function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launch.fly();
}

  	
