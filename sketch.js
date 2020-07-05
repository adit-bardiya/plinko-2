const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var q,w,e,r,t,y,u,m,o,p,a;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  q = Math.round(random(1,10));
  w = Math.round(random(1,10));
  e = Math.round(random(1,10));
  r = Math.round(random(1,10));
  t = Math.round(random(1,10));
  y = Math.round(random(1,10));
  u = Math.round(random(1,10));
  m = Math.round(random(1,10));
  o = Math.round(random(1,10));
  p = Math.round(random(1,10));


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text(o*50,40,550);
  text(q*50,120,550);
  text(w*50,200,550);
  text(e*50,280,550);
  text(r*50,360,550);
  text(t*50,440,550);
  text(y*50,520,550);
  text(u*50,600,550);
  text(m*50,680,550);
  text(p*50,760,550);
  fill("yellow");
  rect(0,490,800,5);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(turn<=5){
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     a++;
   }
  }
  if(turn>5){
    particles[a] = null;
    textSize(40);
    fill("white");
    text("GAME OVER",350,400);
  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   ground.display();
   drawSprites();
}