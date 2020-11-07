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
   
    plinko1 = new Plinko(50,50,10);
    plinko2 = new Plinko(100,50,10);
    plinko3 = new Plinko(150,50,10);
    plinko4 = new Plinko(200,50,10);
    plinko5 = new Plinko(250,50,10);
    plinko6 = new Plinko(300,50,10);
    plinko7 = new Plinko(350,50,10);
    plinko8 = new Plinko(400,50,10);
    plinko9 = new Plinko(15,130,10);
    plinko10 = new Plinko(65,130,10);
    plinko11 = new Plinko(115,130,10);
    plinko12 = new Plinko(165,130,10);
    plinko13 = new Plinko(215,130,10);
    plinko14 = new Plinko(265,130,10);
    plinko15 = new Plinko(315,130,10);
    plinko16 = new Plinko(365,130,10);
    plinko17 = new Plinko(415,130,10);
    plinko18 = new Plinko(465,130,10);
    plinko19 = new Plinko(65,210,10);
    plinko20 = new Plinko(115,210,10);
    plinko21 = new Plinko(215,210,10);
    plinko22 = new Plinko(265,210,10);
    plinko23 = new Plinko(315,210,10);
    plinko24 = new Plinko(365,210,10);
    plinko25 = new Plinko(415,210,10);
    plinko26 = new Plinko(165,210,10);
    plinko27 = new Plinko(15,290,10);
    plinko28 = new Plinko(65,290,10);
    plinko29 = new Plinko(115,290,10);
    plinko30 = new Plinko(165,290,10);
    plinko31 = new Plinko(215,290,10);
    plinko32 = new Plinko(265,290,10);
    plinko33 = new Plinko(315,290,10);
    plinko34 = new Plinko(365,290,10);
    plinko35 = new Plinko(415,290,10);
    plinko36 = new Plinko(465,290,10);
    
     

    
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
    plinko1.display();
    plinko2.display();
    plinko3.display();
    plinko4.display();
    plinko5.display();
    plinko6.display();
    plinko7.display();
    plinko8.display();
    plinko9.display();
    plinko10.display();
    plinko11.display();
    plinko12.display();
    plinko13.display();
    plinko14.display();
    plinko15.display();
    plinko16.display();
    plinko17.display();
    plinko18.display();
    plinko19.display();
    plinko20.display();
    plinko21.display();
    plinko22.display();
    plinko23.display();
    plinko24.display();
    plinko25.display();
    plinko26.display();
    plinko27.display();
    plinko28.display();
    plinko29.display();
    plinko30.display();
    plinko31.display();
    plinko32.display();
    plinko33.display();
    plinko34.display();
    plinko35.display();
    plinko36.display();
    
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
    for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
         }
      for (var j = 0; j < particles.length; j++) {
      particles[j].display();
      }
    
    }