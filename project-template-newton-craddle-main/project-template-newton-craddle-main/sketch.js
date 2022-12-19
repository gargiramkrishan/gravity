const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ball;
var ball1;
var ball2;
var ball3;
var ball4;

var cont,cont2;

var btn;


var ground;


function setup() {
  createCanvas(800, 600);
  engine = Engine.create()
  world = engine.world;

  var option = {
    restitution: 0.60,
 }


 


var skf = {
  isStatic : true
}


 ball = Bodies.circle(200,400,20,option);
 World.add(world,ball);

  ball1 = Bodies.circle(300,400,20,option);
  World.add(world,ball1);

  ball2 = Bodies.circle(400,400,20,option);
  World.add(world,ball2);

  ball3 = Bodies.circle(500,400,20,option);
  World.add(world,ball3);

  ball4 = Bodies.circle(600,400,20,option);
  World.add(world,ball4)

  ground = Bodies.rectangle(400,40,600,40,skf)
  World.add(world,ground)
  

  btn = createImg('up.png')
  btn.position(20,30)
  btn.size(60,50)
  btn.mouseClicked(boun)




  cont = Matter.Constraint.create({
           pointA:{x:200,y:60},
           bodyB:ball,
           pointB:{x:0,y:0},
           length:150,
           stiffness:0.150
         })
       
         World.add(world,cont)
   
  cont1 = Matter.Constraint.create({
    pointA:{x:300,y:60},
    bodyB:ball1,
    pointB:{x:0,y:0},
    length:150,
    stiffness:0.150
  })

  World.add(world,cont1)        

  cont2 = Matter.Constraint.create({
    pointA:{x:400,y:60},
    bodyB:ball2,
    pointB:{x:0,y:0},
    length:150,
    stiffness:0.150
  })

  World.add(world,cont2)       
  
  cont3 = Matter.Constraint.create({
    pointA:{x:500,y:60},
    bodyB:ball3,
    pointB:{x:0,y:0},
    length:150,
    stiffness:0.150
  })
  World.add(world,cont3)      

  cont4 = Matter.Constraint.create({
    pointA:{x:600,y:60},
    bodyB:ball4,
    pointB:{x:0,y:0},
    length:150,
    stiffness:0.150
  })

  World.add(world,cont4)          

  ellipseMode(RADIUS)
  rectMode(CENTER)






}

function draw(){
  background("red")
  line(cont.pointA.x,cont.pointA.y,ball.position.x,ball.position.y)

  line(cont1.pointA.x,cont1.pointA.y,ball1.position.x,ball1.position.y)

  line(cont2.pointA.x,cont2.pointA.y,ball2.position.x,ball2.position.y)

  line(cont3.pointA.x,cont3.pointA.y,ball3.position.x,ball3.position.y)

  line(cont4.pointA.x,cont4.pointA.y,ball4.position.x,ball4.position.y)

  ellipse(ball.position.x,ball.position.y,20)
  ellipse(ball1.position.x,ball1.position.y,20)
  ellipse(ball2.position.x,ball2.position.y,20)
  ellipse(ball3.position.x,ball3.position.y,20)
  ellipse(ball4.position.x,ball4.position.y,20)
  rect(ground.position.x,ground.position.y,600,40)
	Engine.update(engine);
	
}

function boun()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:+0.05,y:0});
}