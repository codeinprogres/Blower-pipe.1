const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var blower, blowerMouth, ball;
var button;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  blower = new Blower(250, 90, 200, 20);
  blowerMouth = new BlowerMouth(300, 75, 110, 90);
  ball = new Ball(600, 25, 45, 45);

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  blower.display1();
  ball.display();
  blowerMouth.display2();
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x : 0, y : 0}, { x : 0, y : -0.05});
}