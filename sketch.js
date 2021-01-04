const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var ground;
var polygon,pointB;
var slingshot;
var options;
var score;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

   

  ground = new Ground(500,325,300,10);

  options = {
    density:1.0
  }
  score=0;

  polygon =Bodies.rectangle(100,250,50,50,options);
  World.add(world, polygon);

 block1 = new Block(500,310,40,40);
 block2 = new Block(539,310,40,40);
 block3 = new Block(579,310,40,40);
 block4 = new Block(459,310,40,40);
 block5 = new Block(419,310,40,40);
 block6 = new Block(520,270,40,40);
 block7 = new Block(560,270,40,40);
 block8 = new Block(480,270,40,40);
 block9 = new Block(440,270,40,40);
 block10 = new Block(500,230,40,40);
 block11 = new Block(540,230,40,40);
 block12 = new Block(460,230,40,40);
 block13 = new Block(520,190,40,40);
 block14 = new Block(480,190,40,40);
 block15 = new Block(500,150,40,40);

  slingshot = new SlingShot(polygon,{x:100,y:150});
  Engine.run(engine);
}

function draw() {
  background(50,50,50);

  rectMode(CENTER);
  rect(polygon.position.x, polygon.position.y,50,50,);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  slingshot.display();

  ground.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();

  text("Score: "+score,725,50)
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  slingshot.attach(this.polygon);
}

function attach(){
  slingshot
}