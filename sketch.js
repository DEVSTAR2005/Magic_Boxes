const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



var gSlider;
var box1
var boxes=[]
var ground


     

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 2         

  

  gSlider = createSlider(0, 10, 5,1);
  gSlider.position(40, 365);

  ground = Bodies.rectangle(600,400,1200,50)
         
  World.add(world,ground);
  ground.isStatic = true
}



function draw(){
  background(0);
  Engine.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,50)
 
  var fVal = gSlider.value();

  engine.world.gravity.y = fVal

  for(var i=0;i<boxes.length;i++)
  {
    boxes[i].display();
  }
  

}


function mouseClicked()
{
  console.log(5)
  
  
   box1 = new Box(mouseX,mouseY,Math.round(random(50,200)),Math.round(random(10,200)))
   boxes.push(box1)
   
  

}



 


 


