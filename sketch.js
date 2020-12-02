
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,ground;
var stone;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var fling;
function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(375,300,400,400);
	ground = new Ground(400,680,800,20);
	stone = new Stone(40,510,40);
	mango1 = new Mango(480,400,40,40);
	mango2 = new Mango(580,400,40,40);
	mango3= new Mango(680,400,40,40);
	mango4 = new Mango(430,500,40,40);
	mango5 = new Mango(550,450,40,40);
	mango6= new Mango(680,480,40,40);
	mango7 = new Mango(500,350,40,40);
	mango8 = new Mango(580,350,40,40);
	mango9= new Mango(600,310,40,40);

	fling = new Fling(stone.body,{x:50,y:530});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //text(mouseX+","+mouseY,mouseX,mouseY)
  ground.display();
  tree.display();
  stone.display();
  detectCollison(stone,mango1);
  mango1.display();
  detectCollison(stone,mango2);
  mango2.display();
  detectCollison(stone,mango3);
  mango3.display();
  detectCollison(stone,mango4);
  mango4.display();
  detectCollison(stone,mango5);
  mango5.display();
  detectCollison(stone,mango6);
  mango6.display();
  detectCollison(stone,mango7);
  mango7.display();
  detectCollison(stone,mango8);
  mango8.display();
  detectCollison(stone,mango9);
  mango9.display();
  image(boy,30,450,300,300);

  fling.display();
  drawSprites();
 
}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	fling.fly();
}

function detectCollison(Cstone,Cmango){
	var mangoPos = Cmango.body.position;
	var stonePos = Cstone.body.position;
	var distance = dist(mangoPos.x,mangoPos.y,stonePos.x,stonePos.y);
	var d2 = Cstone.body.circleRadius + Cmango.body.circleRadius
	console.log(distance);
	console.log(d2);
	if(distance <= d2){
		Body.setStatic(Cmango.body,false);
	}
	
}

function keyPressed(){
	if(keyCode == 32){
		Body.setPosition(stone.body,{x:40,y:510});
		fling.attach(stone.body);
	}
}