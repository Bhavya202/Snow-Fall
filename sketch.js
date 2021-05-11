const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowFlake = [];
var engine, world;
var backgroundImg;

function preload() {
  //preload the images and files
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  //create the canvas
  createCanvas(1200,800);

  //create the engine and add it to the world
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  //create the backdround
  background(backgroundImg);

  //update the engine
  Engine.update(engine);

  //create the snowflake
  if (frameCount % 60 === 0){
    snowFlake.push(new Snow(random(width/2-30), random(width/2+30), 10, 10));
    console.log(snowFlake[snowFlake.length-1]);
  }

  //makes the sprites visible
  //drawSprites();

  //display the snowFlakes
  for (var i = 0; i < snowFlake.length; i++){
    snowFlake[i].display();
  }
}