
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var stand1, stand2;

var block1,block2,block3,block4,block5,block6,block7,block8,block9 ;
var block11,block12,block13,block14,block15,block16,block17,block18,block19 ;

var sling;

var polygon;

function preload() {

}


function setup() {

    createCanvas(1600, 800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800, 780, 1600, 20);

    stand1 = new Ground(1300, 400, 300, 20);
    stand2 = new Ground(700, 600, 500, 20);

    block1 = new Block(1300,380);
    block2 = new Block(1300,380);
    block3 = new Block(1300,380);
    block4 = new Block(1300,380);
    block5 = new Block(1300,380);

    block6 = new Block(1300,330);
    block7 = new Block(1300,330);
    block8 = new Block(1300,330);

    block9 = new Block(1300,280);
    
    
    block10 = new Block(700,580);
    block11 = new Block(700,580);
    block12 = new Block(700,580);
    block13 = new Block(700,580);
    block14 = new Block(700,580);
    block15 = new Block(700,580);
    block16 = new Block(700,580);
    block17 = new Block(700,580);

    block18 = new Block(700,530);
    block19 = new Block(700,530);
    block20 = new Block(700,530);
    block21 = new Block(700,530);
    block22 = new Block(700,530);

    block23 = new Block(700,480);
    block24 = new Block(700,480);
    block25 = new Block(700,480);    

    block26 = new Block(700,430);

    polygon = new Polygon(100, 600, 50);

    sling = new Slingshot(polygon.body, { x: 200, y: 500 });

    Engine.run(engine);

}


function draw() {

    background("black");
    Engine.update(engine);

    textSize(20);
    fill("red");
    text("Drag the hexagon stone and release it to launch towards the blocks",100,100);
    text("Press Space to try again",300,220);


    ground.display();
    stand1.display();
    stand2.display();

    polygon.display();
    sling.display();

    fill("blue");
    block1.display(); 
    block2.display(); 
    block3.display(); 
    block4.display(); 
    block5.display(); 

    fill("red");
    block6.display(); 
    block7.display(); 
    block8.display();

    fill("green");
    block9.display(); 
    
    fill("blue");
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();

    fill("red");
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();

    fill("green");
    block23.display();
    block24.display();
    block25.display();

    fill("pink");
    block26.display();
}


function mouseDragged() {

    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, { x: 200, y: 500 });
        sling.attach(polygon.body);
    }
}