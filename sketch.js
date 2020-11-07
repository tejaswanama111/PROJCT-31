const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup(){
    var canvas = createCanvas(500,700);
  
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(250,690,480,20);

    division1 = new Ground(10,645,12,300);
    division2 = new Ground(120,645,12,300);
    division3= new Ground(240,645,12,300);
    division4 = new Ground(360,645,12,300);
    division5 = new Ground(490,645,12,300);
   
    for (var j = 50; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,120,10));
    }
  
    for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,220,10));
    }
  
     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,320,10));
    }
  
     for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,420,10));
       
    }
      
}

function draw(){
    
    background("black");
   
    Engine.update(engine);
    
    ground.display();
   
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
      }
      
      if(frameCount%60===0){
       particles.push(new Particle(random(width/2-10,width/2+10),10,10));
       
     }
    
     for (var j = 0; j < particles.length; j++) {
        particles[j].display();
      }
    }
