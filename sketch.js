const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];

for (var j =0; j < particles.length; j++)
{
  particles[j].display();
}

var plinkos = [];

for(var j =40; j<=width; j=j+50)
{
  plinkos.push(new Plinko(j, 75));
}
for(var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j, 175));
}

var divisions = [];
var divisionHeight = 300;

for (var j =0; k < divisions.length; k++)
{
  divisions[k].display();
}

for (var k =0; k <=width; k =k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}


function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
  world = engine.world;

  plinko = new Plinko(50, 100, 10)
  ground = new Ground(240, 795, 800, 10);
}

function draw() {
  background(0);  
  Engine.update(engine);

  plinko.display();
  ground.display();
}