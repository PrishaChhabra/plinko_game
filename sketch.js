
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particless=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;


var ground1;


function preload()
{
	
}

function setup() {
	createCanvas(480,800);
  //createSprite(400, 200, 50, 50);


	engine = Engine.create();
  world = engine.world;
 
	//Create the Bodies Here.
  ground1=new Ground(220,770,560,10);

   for(var k=0;k<=width; k=k+80){
    divisions.push(new Division (k,height-divisionHeight/2,10,divisionHeight)); 
  }



	Engine.run(engine);
  
}


function draw() {
  background("black");  
  //drawSprites();
 


ground1.display();


}






