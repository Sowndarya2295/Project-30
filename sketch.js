const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var slingshot;
var polygonImg;


function preload(){
    polygonImg = loadImage("Ball.jpg");
    bgImage = loadImage("garden.jpg");
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20,{restitution: 1.2,density: 1.5});
  World.add(world,polygon);

  slingshot = new SlingShot(polygon,{ x : 100, y : 200});

  ground = new Stand(400,380,800,20);
  
  stand1 = new Stand(390,265,180,20);
  stand2 = new Stand(690,275,180,20);

  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);

  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);

  block9 = new Box(390,155,30,40);

  block10 = new Box(630,245,30,40);
  block11 = new Box(660,245,30,40);
  block12 = new Box(690,245,30,40);
  block13 = new Box(720,245,30,40);
  block14 = new Box(750,245,30,40);

  block15 = new Box(660,205,30,40);
  block16 = new Box(690,205,30,40);
  block17 = new Box(720,205,30,40);

  block18 = new Box(690,165,30,40);
}

function draw() {
  background(bgImage);  
  Engine.update(engine);

  fill("black");
  textSize(25);
  text("Drag the ball and release it to launch it towards the ball",100,100);

  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  stand1.display();
  stand2.display();

  slingshot.display();
  
  ground.display();
  
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
  block16.display();
  block17.display();
  block18.display();

  drawSprites();
}


function mouseDragged(){
   Matter.Body.setPosition(polygon,{x : mouseX , y : mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon);
  }
}