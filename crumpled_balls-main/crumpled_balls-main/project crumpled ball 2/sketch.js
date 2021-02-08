const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball;
var DustBin,DustBinImg;
var launcher;
var paper

function preload(){
    DustBinImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper = new Paper();

    DustBin = createSprite(964,520,20,20);
    DustBin.addImage(DustBinImg);
    DustBin.scale = 0.45;

    binPart1 = new Dustbin(910,505,10,120);
    binPart2 = new Dustbin(962,565,125,10);
    binPart3 = new Dustbin(1014,505,10,120);

    launcher = new Launcher(paper.body,{x:200,y:350})
}

function draw(){
    background(255);
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
    paper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
    launcher.display();
      
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}