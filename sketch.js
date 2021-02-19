var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Body= Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions= [];
var divisionHeight=300;
var score =0;
var particle;
var count=0;
var gameState="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
    }
   
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,550);   text("500",100,550);   text("400",180,550);   text("400",260,550);
  text("300",340,550);    text("300",420,550);   text("200",500,550);   text("100",580,550);
  text("100",660,550);   text("100",740,550);

  Engine.update(engine);

  if(gameState==="end"){
    textSize(50);
    text("GameOver!!",150,250);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<150 && particle.body.position.x>1){
        score= score+500;
        particle=null;
        if(count>=5) gameState="end"
      }

      else if(particle.body.position.x<300 && particle.body.position.x>151){
        score= score+400;
        particle= null;
        if(count>=5) gameState="end"
      }

      else if(particle.body.position.x<450 && particle.body.position.x>301){
        score= score+300;
        particle= null;
        if(count>=5) gameState="end"
      }

      else if(particle.body.position.x<600 && particle.body.position.x>451){
        score= score+200;
        particle= null;
        if(count>=5) gameState="end"
      }

      else if(particle.body.position.x<800 && particle.body.position.x>451){
        score= score+100;
        particle= null;
        if(count>=5) gameState="end"
      }

    }
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   
}

function mousePressed(){
  if(gameState!== "end"){
    particle= new Particle(mouseX,10,10,10);
  }
  count++

}